import { openModalAddTask } from '../../../../redux/Modal/modalSlice';
import { useDispatch } from 'react-redux';
import {AiOutlinePlus} from 'react-icons/ai'
import {
  AddTaskBtnStyled,
  AddTaskBtnTextStyled,
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
      <AiOutlinePlus size={20}/>
        {' '}
        <AddTaskBtnTextStyled>Add task</AddTaskBtnTextStyled>
      </AddTaskBtnStyled>
    </>
  );
};
// export default AddTaskBtn;
