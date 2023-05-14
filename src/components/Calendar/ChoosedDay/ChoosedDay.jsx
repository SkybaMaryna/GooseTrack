import React, { useState, useEffect } from 'react';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { selectAllTasks } from 'redux/Tasks/tasksSelectors';

import {
  selectAddTaskOpen,
  selectUpDateTaskModal,
  selectModalConfirmation,
} from 'redux/Modal/modalSelectors';

import { TaskModal } from 'components/shared/TaskModal/TaskModal';

import {
  closeModalAddTask,
  closeModalConfirmation,
  closeModalUpdateTask,
} from 'redux/Modal/modalSlice';

import { deleteTask } from 'redux/Tasks/tasksOperations';

const dayFilter = (tasksMonth, today) => {
  const filteredTasks = tasksMonth.filter(({ date }) => {
    return date === today;
  });

  return filteredTasks;
};

const ChoosedDay = () => {
  const { currentDay } = useParams();

  const dayFromParams =
    currentDay === ':currentDay'
      ? new Date().toISOString().split('T')[0]
      : currentDay;

  const [tasksFilter, setTasksFilter] = useState([]);
  const [choosedDay, setChoosedDay] = useState(dayFromParams);

  const [typeOfColumn, setTypeOfColumn] = useState(null);
  const [taskFromCard, setTaskFromCard] = useState(null);

  const tasksMonth = useSelector(selectAllTasks);
  const modalAddState = useSelector(selectAddTaskOpen);
  const modalEditState = useSelector(selectUpDateTaskModal);
  const modalConfirmationState = useSelector(selectModalConfirmation);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalAddTask());
    setTaskFromCard(null);
  };

  const closeEditModal = () => dispatch(closeModalUpdateTask());
  const closeDeleteModal = () => dispatch(closeModalConfirmation());

  const deleteTaskFu = () => {
    closeDeleteModal();

    dispatch(deleteTask(taskFromCard._id))
      .then(() => toast.success('taskDeleted'))
      .catch(() => toast.error('taskDeleteError'));
    setTaskFromCard(null);
  };

  const getTypeOfColumn = data => {
    setTypeOfColumn(prevState => (prevState = data));
  };

  const getTask = task => {
    setTaskFromCard(task);
  };

  useEffect(() => {
    setChoosedDay(dayFromParams);
    setTasksFilter(dayFilter(tasksMonth, choosedDay));
  }, [tasksMonth, dayFromParams, choosedDay]);

  const chooseDay = ({ day, month, year }) => {
    setChoosedDay(`${year}-${month}-${day}`);
    setTasksFilter(dayFilter(tasksMonth, `${year}-${month}-${day}`));
  };

  return (
    <>
    <DayCalendarHead clickChooseDay={chooseDay} />
    <TasksColumnsListWrapper>
      
      <TasksColumnsList
        tasks={tasksFilter}
        getTypeOfColumn={getTypeOfColumn}
        getTask={getTask}
      />
      {modalAddState && (
        <TaskModal
          closeModal={closeModal}
          typeOfModal={'add'}
          typeOfColumn={typeOfColumn}
          choosedDay={choosedDay}
        />
      )}
      {modalEditState && (
        <TaskModal
          closeModal={closeEditModal}
          typeOfModal={'edit'}
          taskFromCard={taskFromCard}
        />
      )}
      {modalConfirmationState && (
        <TaskModal
          closeModal={closeDeleteModal}
          actionFu={deleteTaskFu}
          typeOfModal={'deleteTask'}
        />
      )}
    </TasksColumnsListWrapper>
    </>
  );
};

export default ChoosedDay;
