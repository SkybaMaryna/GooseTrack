import { openModalAddTask } from '../../../../redux/Modal/modalSlice';
import { useDispatch } from 'react-redux';
import {
  AddTaskBtnStyled,
  AddTaskBtnTextStyled,
  OutlinePlus,
} from './AddTaskBtn.styled';

export const AddTaskBtn = ({ getTypeOfColumn, title }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    getTypeOfColumn({ status: title });
    dispatch(openModalAddTask());
  };

  return (
    <>
      <AddTaskBtnStyled onClick={openModal}>
        <OutlinePlus /> <AddTaskBtnTextStyled>Add task</AddTaskBtnTextStyled>
      </AddTaskBtnStyled>
    </>
  );
};
