import {
  TaskToolbarStyled,
  TaskToolbarBtn,
  TaskModalChangeStatusWrapper,
  TaskModalChangeStatusBtn,
  TaskModalChangeStatusBtnElem,
  StateStatus,
  ArrowRight,
  Pencil,
  Trash,
} from './TaskToolbar.styled';
import { useDispatch } from 'react-redux';
import {
  openModalUpdateTask,
  openModalConfirmation
} from 'redux/Modal/modalSlice';
import { useEffect, useState } from 'react';
import { fetchTasks, updateTask } from 'redux/Tasks/tasksOperations';
import Notiflix from 'notiflix';

export const TaskToolbar = ({ task, getTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusStates = ['To do', 'In progress', 'Done'];
  const status = task.status;
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const dispatch = useDispatch();

  const openModal = id => {
    dispatch(openModalUpdateTask());
    getTask(task);
  };

  const confirmationOpen = id => {
    dispatch(openModalConfirmation());
    getTask(task);
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleStatusChange = state => {
    const taskForUpdate = {
      id: task._id,
      task: {
        status: state,
      },
    };
    dispatch(updateTask(taskForUpdate, task._id));
    Notiflix.Notify.success(`Task status changed to ${state}`);
  };

  return (
    <>
      <TaskToolbarStyled>
        <TaskToolbarBtn onClick={() => toggleModal()}>
          <ArrowRight />
        </TaskToolbarBtn>
        {isModalOpen && (
          <TaskModalChangeStatusWrapper data-modal="true">
            {statusStates
              .filter(states => states !== status)
              .map((state, index) => (
                <TaskModalChangeStatusBtn
                  key={index}
                  onClick={() => {
                    handleStatusChange(state);
                  }}
                >
                  <TaskModalChangeStatusBtnElem>
                    <StateStatus>{state}</StateStatus>
                    <ArrowRight />
                  </TaskModalChangeStatusBtnElem>
                </TaskModalChangeStatusBtn>
              ))}
          </TaskModalChangeStatusWrapper>
        )}

        <TaskToolbarBtn onClick={() => openModal(task._id)}>
          <Pencil />
        </TaskToolbarBtn>

        <TaskToolbarBtn onClick={confirmationOpen}>
          <Trash />
        </TaskToolbarBtn>
      </TaskToolbarStyled>
    </>
  );
};

// export default TaskToolbar;
