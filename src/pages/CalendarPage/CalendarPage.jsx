import moment from 'moment';
import { useState, useEffect, dispatch } from 'react';
import CalendarTable from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable';
import PeriodPaginator from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import { fetchTasks } from 'redux/Tasks/tasksOperations';

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
    <>
      <PeriodPaginator
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <CalendarTable startDay={startDay} today={today} />
    </>
  );
};

export default CalendarPage;
