// import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './CalendarTable/MonthCalendarHeader/MonthCalendarHeader';
import { selectAllTasks } from 'redux/Tasks/tasksSelectors.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import { fetchTasks } from 'redux/Tasks/tasksOperations';

const ChoosedMonth = () => {
  const { startDay, today } = useOutletContext();
  const tasks = useSelector(selectAllTasks);

  // const { currentDate } = useParams();
  // const currentYear = currentDate.slice(0, 4);
  // const currentMonth = currentDate.slice(6, 7);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTasks({ year: currentYear, month: currentMonth }));
  // }, [currentMonth, currentYear, dispatch]);

  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
