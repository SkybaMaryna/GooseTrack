import PeriodPaginator from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { ToolbarWrapper } from './CalendarToolbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { openModalAddTask } from 'redux/Modal/modalSlice';
import { TaskModal } from 'components/shared/TaskModal/TaskModal';
import { selectAddTaskOpen } from 'redux/Modal/modalSelectors';
export const CalendarToolbar = ({ today, prevHandler, nextHandler }) => {
const dispatch = useDispatch()
const modalOpen = useSelector(selectAddTaskOpen)


  return (
    <ToolbarWrapper>
        <button onClick={()=>dispatch(openModalAddTask())}>OPEN MODAL</button>
        {modalOpen && <TaskModal typeOfModal={'add'}/>}
      <PeriodPaginator
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <PeriodTypeSelect />
    </ToolbarWrapper>
  );
};
