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

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, []);
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
