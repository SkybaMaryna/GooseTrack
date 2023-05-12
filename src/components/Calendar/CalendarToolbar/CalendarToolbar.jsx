import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PeriodPaginator from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { ToolbarWrapper } from './CalendarToolbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { openModalAddTask } from 'redux/Modal/modalSlice';
import { TaskModal } from 'components/shared/TaskModal/TaskModal';
import { selectAddTaskOpen } from 'redux/Modal/modalSelectors';
export const CalendarToolbar = ({ today, prevHandler, nextHandler }) => {
  const [type, setType] = useState('month');

  const location = useLocation();

  const pathname = location.pathname.slice(0, -11);

  useEffect(() => {
    if (pathname === '/calendar/day') {
      setType('day');
      return;
    }
    setType('month');
  }, [pathname]);
  return (
    <ToolbarWrapper>
      <PeriodPaginator
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        type={type}
      />
      <PeriodTypeSelect today={today} onChangeType={setType} />
    </ToolbarWrapper>
  );
};
