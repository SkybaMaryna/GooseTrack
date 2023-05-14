import { useSelector } from 'react-redux';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './CalendarTable/MonthCalendarHeader/MonthCalendarHeader';
import { selectAllTasks } from 'redux/Tasks/tasksSelectors.js';
import { useOutletContext } from 'react-router-dom';

const ChoosedMonth = () => {
  const { startDay, today } = useOutletContext();
  const tasks = useSelector(selectAllTasks);

  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
