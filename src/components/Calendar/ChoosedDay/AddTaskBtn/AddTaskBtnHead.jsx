import { AddTaskBtnStyled } from './AddTaskBtnHead.styled';
import { useDispatch } from 'react-redux';
import { openModalAddTask } from 'redux/Modal/modalSlice';
import { BsPlusCircle } from 'react-icons/bs'

const AddTaskBtnHead = ({ title, getTypeOfColumn, tasks }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalAddTask());
    getTypeOfColumn({ status: title });
  };

  return (
    <>
      <AddTaskBtnStyled onClick={openModal}>
        <BsPlusCircle size={20}/>
      </AddTaskBtnStyled>
    </>
  );
};

export default AddTaskBtnHead;