import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchTasks } from 'redux/Tasks/tasksOperations';
import { CalendarToolbar } from 'components/Calendar/CalendarToolbar/CalendarToolbar';
import { useParams } from 'react-router-dom';

const CalendarPage = () => {
  const { currentDate } = useParams();

  const [today, setToday] = useState(moment());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  moment.updateLocale('ua', { week: { dow: 1 } });
  const startDay = today.clone().startOf('month').startOf('week');

  const prevHandler = type => {
    setToday(prev => prev.clone().subtract(1, type));
    const date = today.clone().subtract(1, type).toISOString().split('T')[0];
    navigate(`/main/calendar/${type}/${date}`);
  };
  const nextHandler = type => {
    setToday(prev => prev.clone().add(1, type));
    const date = today.clone().add(1, type).toISOString().split('T')[0];
    navigate(`/main/calendar/${type}/${date}`);
  };

  const currentYear = currentDate?.slice(0, 4);
  const currentMonth = currentDate?.slice(6, 7);

  useEffect(() => {
    currentYear &&
      currentMonth &&
      dispatch(fetchTasks({ year: currentYear, month: currentMonth }));
  }, [currentMonth, currentYear, dispatch]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CalendarToolbar
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <Outlet context={{ startDay, today, currentDate }} />
    </div>
  );
};

export default CalendarPage;
