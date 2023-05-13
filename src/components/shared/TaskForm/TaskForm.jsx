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
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
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
    if (start.length < 5 && end.length < 5 && enterText.length < 1) {
      toast.error('fields cannot be empty');
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

  const onFocusFu = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'start':
        setStart(value);
        break;
      case 'end':
        setEnd(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (start && String(start).length > 5) {
      toast.error('Enter the correct time in the format 00:00');
    }
    if (end && String(end).length > 5) {
      setEnd('');
      toast.error('Enter the correct time in the format 00:00');
    }
    if (enterText && String(enterText).length > 255) {
      setEnterText(enterText.slice(0, 255));
      toast.error('title cannot be longer than 255 characters');
    }
  }, [start, end, enterText]);

  const timeFormatValidation = (hour, minutes) => {
    let valid = 'valid';

    if (Number(hour) > 23) {
      toast.error('you cannot specify the hours value more than 23');
      return (valid = 'invalid');
    }
    if (Number(minutes > 59)) {
      toast.error('you cannot specify the minutes value more than 59');
      return (valid = 'invalid');
    }
    return valid;
  };

  const timeFormValidation = () => {
    let status = 'valid';
    let timeOfStart = start.slice(0, 2).concat(start.slice(3, 5));
    let timeOfEnd = end.slice(0, 2).concat(end.slice(3, 5));

    if (Number(timeOfStart) >= Number(timeOfEnd)) {
      status = 'invalid';
    }
    return status;
  };

  function isAN(value) {
    return (
      (value instanceof Number || typeof value === 'number') && !isNaN(value)
    );
  }

  const onBlurFu = event => {
    const { name, value } = event.target;
    if (value && String(value).length < 4) {
      toast.error('value cannot be less than 4 characters');
    }
    switch (name) {
      case 'start':
        if (value && String(value).length === 5) {
          let hour = value.slice(0, 2);
          let minutes = value.slice(3, 5);
          if (!isAN(Number(hour)) || !isAN(Number(minutes))) {
            toast.error('Value must be the number');
            setStart('');
            return;
          }
          if (timeFormatValidation(hour, minutes) === 'invalid') {
            setStart('');
            return;
          }
          const time = hour.concat(':', minutes);
          setStart(time);
        }
        if (value && String(value).length === 4) {
          let hour = value.slice(0, 2);
          let minutes = value.slice(2, 4);

          if (!isAN(Number(hour)) || !isAN(Number(minutes))) {
            toast.error('Value must be the number');
            setStart('');
            return;
          }
          if (timeFormatValidation(hour, minutes) === 'invalid') {
            setStart('');
            return;
          }
          const time = hour.concat(':', minutes);
          setStart(time);
        }

        break;
      case 'end':
        if (value && String(value).length === 5) {
          let hour = value.slice(0, 2);
          let minutes = value.slice(3, 5);
          if (!isAN(Number(hour)) || !isAN(Number(minutes))) {
            toast.error('Value must be the number');
            setStart('');
            return;
          }
          if (timeFormatValidation(hour, minutes) === 'invalid') {
            setEnd('');
            return;
          }
          const time = hour.concat(':', minutes);
          setEnd(time);
        }
        if (value && String(value).length === 4) {
          let hour = value.slice(0, 2);
          let minutes = value.slice(2, 4);
          if (!isAN(Number(hour)) || !isAN(Number(minutes))) {
            toast.error('Value must be the number');
            setStart('');
            return;
          }
          if (timeFormatValidation(hour, minutes) === 'invalid') {
            setEnd('');
            return;
          }
          const time = hour.concat(':', minutes);
          setEnd(time);
        }

        break;
      default:
        break;
    }
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
  const startSetter = event => {
    const { value } = event.target;
    setStart(prevState => (prevState = value));
  };
  const endSetter = event => {
    const { value } = event.target;
    setEnd(prevState => (prevState = value));
  };

  return (
    <>
      <Form
        titleSetter={titleSetter}
        startSetter={startSetter}
        endSetter={endSetter}
        onBlurFu={onBlurFu}
        onFocusFu={onFocusFu}
        enterTextTitle={enterText}
        startTitle={start}
        endTitle={end}
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
