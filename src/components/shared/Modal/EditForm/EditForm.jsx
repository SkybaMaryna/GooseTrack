import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '../Form/Form';
import { Priority } from '../Priority/Priority';
import { updateTask } from '../../../../redux/Tasks/tasksOperations';
import {
  StyledDiv,
  StyledEditButton,
  StyledPencilIcon,
} from './EditFormStyled';
import { toast } from 'react-toastify';

export const EditForm = ({ taskFromCard, closeModal }) => {
  const [editText, setEditText] = useState(taskFromCard.title);
  const [start, setStart] = useState(taskFromCard.start);
  const [end, setEnd] = useState(taskFromCard.end);
  const [priorities, setPriorities] = useState(taskFromCard.priority);

  const dispatch = useDispatch();

  const [obj, setObj] = useState([
    { status: priorities === 'low', key: 'Low', color: 'blue' },
    { status: priorities === 'medium', key: 'Medium', color: 'orange' },
    { status: priorities === 'high', key: 'High', color: 'red' },
  ]);

  const prioritySelector = event => {
    const priorityChecked = event.target.innerText;

    setPriorities(prevState => (prevState = priorityChecked));
  };

  useEffect(() => {
    if (editText.length > 255) {
      toast.error('Title cannot be longer than 255 characters');
    }
    setEditText(editText);
  }, [editText]);

  const timeFormValidation = () => {
    let status = 'valid';
    if (Number(start) >= Number(end)) {
      status = 'invalid';
    }
    return status;
  };

  const updateTaskFu = () => {
    if (timeFormValidation() === 'invalid') {
      toast.error('End Time of your task can not be less then Start Time');
      return;
    }
    if (!start && !end && !editText) {
      toast.error('Fields cannot be empty');
      return;
    }
    closeModal();
    const id = taskFromCard._id;
    const taskForUpdate = {
      id: taskFromCard._id,
      task: {
        title: editText,
        start,
        end,
        createdAt: taskFromCard.createdAt,
        priority: priorities.toLowerCase(),
      },
    };

    dispatch(updateTask(taskForUpdate, id));
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
    setEditText(prevState => (prevState = value));
  };
  const onChangeStart = startDate => {
    let startValue = startDate.toLocaleTimeString('en-UK');
    startValue = startValue.substring(0, startValue.lastIndexOf(':'));
    if (startValue >= end) {
      toast.error('End Time of your task can not be less then Start Time');
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

  return (
    <>
      <Form
        titleSetter={titleSetter}
        startSetter={onChangeStart}
        endSetter={onChangeEnd}
        enterText={editText}
        startTime={start}
        endTime={end}
      />
      <Priority obj={obj} prioritySelector={prioritySelector} />
      <StyledDiv>
        <StyledEditButton onClick={() => dispatch(updateTaskFu)}>
          <StyledPencilIcon size="1.5em" /> Edit
        </StyledEditButton>
      </StyledDiv>
    </>
  );
};
