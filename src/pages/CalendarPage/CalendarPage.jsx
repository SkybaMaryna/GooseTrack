import moment from 'moment';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CalendarTable from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable';
import { fetchTasks } from 'redux/Tasks/tasksOperations';
import { CalendarToolbar } from 'components/Calendar/CalendarToolbar/CalendarToolbar';
import ColumnsTasksList from 'components/Calendar/ChoosedDay/ColumnsTasksList/ColumnsTasksList';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

const CalendarPage = () => {
  const { currentDay } = useParams();
  const navigate = useNavigate();
  moment.updateLocale('en', { week: { dow: 1 } });
  const [today, setToday] = useState(moment());

  const startDay = today.clone().startOf('month').startOf('week');

  // window.moment = moment;
  const prevHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };

  const nextHandler = () => {
    setToday(prev => prev.clone().add(1, 'month'));
  };

  const dispatch = useDispatch();
  const currentDate = new Date(today);

  console.log(currentDate);

  useEffect(() => {
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth('M') + 1).padStart(2, '0');
    dispatch(fetchTasks({ month, year }));
  }, [currentDay]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CalendarToolbar
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <CalendarTable startDay={startDay} today={today} />
      {/* <Outlet context={{ startDay, today, currentDate }} /> */}
    </div>
  );
};

export default CalendarPage;

// tasks={tasksFilter}
// getTypeOfColumn={getTypeOfColumn}
// getTask={getTask}
