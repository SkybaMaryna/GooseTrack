import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
// import { EditButtons } from '../EditButtons/EditButtons';
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
  const [startText, setStartText] = useState(taskFromCard.start);
  const [endText, setEndText] = useState(taskFromCard.end);
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
    if (startText && String(startText).length > 5) {
      setStartText('');
      toast.error('Enter the correct time in the format 00:00');
    }
    if (endText && String(endText).length > 5) {
      setEndText('');
      toast.error('Enter the correct time in the format 00:00');
    }
    if (editText && String(editText).length > 255) {
      setEditText(editText.slice(0, 255));
      toast.error('title cannot be longer than 255 characters');
    }
  }, [startText, endText, editText]);

  const timeFormatValidation = (hour, minutes) => {
    let valid = 'valid';

    if (Number(hour) > 23) {
      toast.error('you cannot specify an hour value greater than 23');
      return (valid = 'invalid');
    }
    if (Number(minutes > 59)) {
      toast.error('you cannot specify an minutes value greater than 59');
      return (valid = 'invalid');
    }
    return valid;
  };

  const timeFormValidation = () => {
    let status = 'valid';
    let timeOfStart = startText.slice(0, 2).concat(startText.slice(3, 5));
    let timeOfEnd = endText.slice(0, 2).concat(endText.slice(3, 5));

    if (Number(timeOfStart) >= Number(timeOfEnd)) {
      status = 'invalid';
    }
    return status;
  };

  const onFocusFu = event => {
    const { name } = event.target;
    switch (name) {
      case 'start':
        setStartText('');
        break;
      case 'end':
        setEndText('');
        break;

      default:
        break;
    }
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
            setStartText('');
            return;
          }
          if (timeFormatValidation(hour, minutes) === 'invalid') {
            setStartText('');
            return;
          }
          const time = hour.concat(':', minutes);
          setStartText(time);
        }
        if (value && String(value).length === 4) {
          let hour = value.slice(0, 2);
          let minutes = value.slice(2, 4);
          if (!isAN(Number(hour)) || !isAN(Number(minutes))) {
            toast.error('Value must be the number');
            setStartText('');
            return;
          }
          if (timeFormatValidation(hour, minutes) === 'invalid') {
            setStartText('');
            return;
          }
          const time = hour.concat(':', minutes);
          setStartText(time);
        }

        break;
      case 'end':
        if (value && String(value).length === 5) {
          let hour = value.slice(0, 2);
          let minutes = value.slice(3, 5);
          if (!isAN(Number(hour)) || !isAN(Number(minutes))) {
            toast.error('Value must be the number');
            setEndText('');
            return;
          }
          if (timeFormatValidation(hour, minutes) === 'invalid') {
            setEndText('');
            return;
          }
          const time = hour.concat(':', minutes);
          setEndText(time);
        }
        if (value && String(value).length === 4) {
          let hour = value.slice(0, 2);
          let minutes = value.slice(2, 4);
          if (!isAN(Number(hour)) || !isAN(Number(minutes))) {
            toast.error('Value must be the number');
            setEndText('');
            return;
          }
          if (timeFormatValidation(hour, minutes) === 'invalid') {
            setEndText('');
            return;
          }
          const time = hour.concat(':', minutes);
          setEndText(time);
        }

        break;
      default:
        break;
    }
  };

  const updateTaskFu = () => {
    if (timeFormValidation() === 'invalid') {
      toast.error(
        'task end time cannot be greater ore equal than its start time'
      );
      return;
    }
    if (startText.length < 5 && endText.length < 5 && editText.length < 1) {
      toast.error('fields cannot be empty');
      return;
    }
    closeModal();
    const id = taskFromCard._id;
    const taskForUpdate = {
      id: taskFromCard._id,
      task: {
        title: editText,
        start: startText,
        end: endText,
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
  const startSetter = event => {
    const { value } = event.target;
    setStartText(prevState => (prevState = value));
  };
  const endSetter = event => {
    const { value } = event.target;
    setEndText(prevState => (prevState = value));
  };

  return (
    <>
      <Form
        titleSetter={titleSetter}
        startSetter={startSetter}
        endSetter={endSetter}
        editText={editText}
        startText={startText}
        endText={endText}
        onBlurFu={onBlurFu}
        onFocusFu={onFocusFu}
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
