import moment from 'moment';
// import {  useEffect, dispatch } from 'react';
import { useState } from 'react';
import CalendarTable from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable';
// import { fetchTasks } from 'redux/Tasks/tasksOperations';
import { CalendarToolbar } from 'components/Calendar/CalendarToolbar/CalendarToolbar';

const CalendarPage = () => {
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

<<<<<<< Updated upstream
  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, []);
=======
  const dispatch = useDispatch();
  const currentDate = new Date(today);

  console.log(currentDate);

  useEffect(() => {
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth('M') + 1).padStart(2, '0');
    dispatch(fetchTasks({ month, year }));
  }, [currentDate, dispatch]);

>>>>>>> Stashed changes
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CalendarToolbar
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <CalendarTable startDay={startDay} today={today} />
    </div>
  );
};

export default CalendarPage;
