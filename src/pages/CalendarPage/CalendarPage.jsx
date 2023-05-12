import moment from 'moment';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchTasks } from 'redux/Tasks/tasksOperations';
import { CalendarToolbar } from 'components/Calendar/CalendarToolbar/CalendarToolbar';
// import { useParams } from 'react-router-dom';
import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';
import ChoosedDay from '../../components/Calendar/ChoosedDay/ChoosedDay';
import { selectAllTasks } from 'redux/Tasks/tasksSelectors.js';
const CalendarPage = () => {
  // const { currentDay } = useParams();
  // const navigate = useNavigate();
  const tasks = useSelector(selectAllTasks);
  const [today, setToday] = useState(moment());
  const dispatch = useDispatch();
  // const currentDate = new Date(today);

  moment.updateLocale('en', { week: { dow: 1 } });
  const startDay = today.clone().startOf('month').startOf('week');
  console.log(startDay);
  const prevHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };
  const nextHandler = () => {
    setToday(prev => prev.clone().add(1, 'month'));
  };
  const navigate = useNavigate();
  const currentDate = moment().format('YYYY-MM');
  const { pathname } = useLocation();

  // const handleNavigate = useCallback(() => {
  //   return navigate(`/calendar/month/${currentDate}`);
  // }, [navigate, currentDate]);

  // useEffect(() => {
  //   if (pathname.endsWith('calendar')) handleNavigate();
  // }, [handleNavigate, pathname]);

  // useEffect(() => {
  //   const year = String(currentDate.getFullYear());
  //   const month = String(currentDate.getMonth('M') + 1).padStart(2, '0');
  //   dispatch(fetchTasks({ month, year }));
  // }, [currentDate]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navigate to={`month/${moment().format('YYYY-MM-DD')}`} />
      <CalendarToolbar
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      {/* <ChoosedMonth startDay={startDay} today={today} /> */}
      {/* <ChoosedDay /> */}
      <Outlet context={{ startDay, today, currentDate }} />
    </div>
  );
};

export default CalendarPage;
