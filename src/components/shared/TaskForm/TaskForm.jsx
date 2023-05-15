import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/Tasks/tasksOperations';
import { closeModalAddTask } from '../../../redux/Modal/modalSlice';
import { Form } from '../Modal/Form/Form';
import { Priority } from '../Modal/Priority/Priority';
import { toast } from 'react-toastify';
import { AddButton, ButtonsWrapper, CancelButton } from './TaskFormStyled';
import { BiPlus } from 'react-icons/bi';

export const TaskForm = ({ closeModal, typeOfColumn, choosedDay }) => {
  const [enterText, setEnterText] = useState('');
  const [start, setStart] = useState('10:00');
  const [end, setEnd] = useState('10:00');
  const [priorities, setPriorities] = useState('Low');

  const [obj, setObj] = useState([
    { status: true, key: 'Low', color: 'blue' },
    { status: false, key: 'Medium', color: 'orange' },
    { status: false, key: 'High', color: 'red' },
  ]);

  const dispatch = useDispatch();

  const prioritySelector = event => {
    const priorityChecked = event.target.innerText;

    setPriorities(prevState => (prevState = priorityChecked));
  };

  const objectFormation = () => {
    if (timeFormValidation() === 'invalid') {
      toast.error('End Time of your task can not be less then Start Time');
      return;
    }
    if (enterText.length === 0) {
      toast.error('Fields cannot be empty');
      return;
    }
    if (!enterText) {
      return;
    }
    const category = typeOfColumn.status.toLowerCase().replace(' ', '-');

    const taskObject = {
      title: enterText,
      start: start.slice(0, 5),
      end: end.slice(0, 5),
      date: choosedDay,
      priority: priorities.toLowerCase(),
      category,
    };

    dispatch(addTask(taskObject));
    dispatch(closeModalAddTask());
  };

  const onChangeStart = startDate => {
    let startValue = startDate.toLocaleTimeString('en-UK');
    startValue = startValue.substring(0, startValue.lastIndexOf(':'));
    if (startValue >= end) {
      toast.error('Start Time of your task can not be bigger then End Time');
    }
    setStart(startValue);
  };
  const onChangeEnd = endDate => {
    let endValue = endDate.toLocaleTimeString('en-UK');
    endValue = endValue.substring(0, endValue.lastIndexOf(':'));
    if (start >= endValue) {
      toast.error('End Time of your task can not be less then Start Time');
      return;
    }
    setEnd(endValue);
  };

  useEffect(() => {
    if (enterText && String(enterText).length > 255) {
      setEnterText(enterText.slice(0, 255));
      toast.error('title cannot be longer than 255 characters');
    }
  }, [enterText]);

  const timeFormValidation = () => {
    let status = 'valid';

    if (Number(start) >= Number(end)) {
      status = 'invalid';
    }
    return status;
  };

  useEffect(() => {
    if (priorities === 'High') {
      setObj(
        prevState =>
          (prevState = [
            { status: false, key: 'Low', color: 'blue' },
            { status: false, key: 'Medium', color: 'orange' },
            { status: true, key: 'High', color: 'red' },
          ])
      );
    } else if (priorities === 'Medium') {
      setObj(
        prevState =>
          (prevState = [
            { status: false, key: 'Low', color: 'blue' },
            { status: true, key: 'Medium', color: 'orange' },
            { status: false, key: 'High', color: 'red' },
          ])
      );
    } else if (priorities === 'Low') {
      setObj(
        prevState =>
          (prevState = [
            { status: true, key: 'Low', color: 'blue' },
            { status: false, key: 'Medium', color: 'orange' },
            { status: false, key: 'High', color: 'red' },
          ])
      );
    }
  }, [priorities]);

  const titleSetter = event => {
    const { value } = event.target;
    setEnterText(prevState => (prevState = value));
  };

  return (
    <>
      <Form
        titleSetter={titleSetter}
        startSetter={onChangeStart}
        endSetter={onChangeEnd}
        enterText={enterText}
        startTime={start}
        endTime={end}
      />
      <Priority obj={obj} prioritySelector={prioritySelector} />

      <ButtonsWrapper>
        <AddButton onClick={() => dispatch(objectFormation)}>
          <BiPlus /> Add
        </AddButton>
        <CancelButton onClick={closeModal}>Cancel</CancelButton>
      </ButtonsWrapper>
    </>
  );
};
