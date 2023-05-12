import { AddTaskBtnStyled, Plus } from './AddTaskBtnHead.styled';
import { useDispatch } from 'react-redux';
import { openModalAddTask } from 'redux/Modal/modalSlice';

const AddTaskBtnHead = ({ title, getTypeOfColumn, tasks }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalAddTask());
    getTypeOfColumn({ status: title });
  };

  return (
    <>
      <AddTaskBtnStyled onClick={openModal}>
        <Plus/>
      </AddTaskBtnStyled>
    </>
  );
};

export default AddTaskBtnHead;