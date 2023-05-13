import { DivOverlay, ModalBody } from './TaskModalStyled';
import { useDispatch } from 'react-redux';
import {
  closeModalAddTask,
  closeModalConfirmation,
  closeModalLogOut,
  closeModalUpdateTask,
} from '../../../redux/Modal/modalSlice';

import { useCallback, useEffect } from 'react';
import { Cross } from '../Modal/Cross/Cross';
import { TaskForm } from '../TaskForm/TaskForm';
import { EditForm } from '../Modal/EditForm/EditForm';
import { DeleteForm } from '../Modal/DeleteForm.jsx/DeleteForm';

export const TaskModal = ({
  typeOfModal,
  actionFu,
  typeOfColumn,
  taskFromCard,
  choosedDay,
}) => {
  const dispatch = useDispatch();

  const closeAll = useCallback(() => {
    dispatch(closeModalAddTask());
    dispatch(closeModalUpdateTask());
    dispatch(closeModalConfirmation());
    dispatch(closeModalLogOut());
  }, [dispatch]);

  const close = useCallback(() => {
    closeAll();
  }, [closeAll]);

  const handleKeyDown = useCallback(
    ev => {
      if (ev.key === 'Escape' || ev.target === ev.currentTarget) {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);



  return (
    <>
      <DivOverlay onClick={close}></DivOverlay>
      <ModalBody>
        <Cross func={close} />
        {typeOfModal === 'add' && (
          <TaskForm
            closeModal={close}
            typeOfModal={typeOfModal}
            typeOfColumn={typeOfColumn}
            choosedDay={choosedDay}
          />
        )}
        {typeOfModal === 'edit' && (
          <EditForm
            closeModal={close}
            typeOfModal={typeOfModal}
            typeOfColumn={typeOfColumn}
            taskFromCard={taskFromCard}
          />
        )}
        {typeOfModal === 'deleteTask' && (
          <DeleteForm closeModal={close} actionFu={actionFu} />
        )}
      </ModalBody>
    </>
  );
};
