import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/Tasks/tasksOperations';
import { CalendarToolbar } from 'components/Calendar/CalendarToolbar/CalendarToolbar';
import { useParams } from 'react-router-dom';

const CalendarPage = () => {
  const params = useParams();
  const currentDate = params.currentDate ?? params.currentDay;
  const date = moment(new Date(currentDate));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startDay = date.clone().startOf('month').startOf('week');

  const prevHandler = type => {
    const newDate = date.clone().subtract(1, type).toISOString().split('T')[0];
    navigate(`/main/calendar/${type}/${newDate}`);
  };
  const nextHandler = type => {
    const newDate = date.clone().add(1, type).toISOString().split('T')[0];
    navigate(`/main/calendar/${type}/${newDate}`);
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
        today={date}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <Outlet context={{ startDay, today: date, currentDate }} />
    </div>
  );
};

export default CalendarPage;
