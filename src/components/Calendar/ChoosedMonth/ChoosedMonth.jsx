// import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './CalendarTable/MonthCalendarHeader/MonthCalendarHeader';
import { selectAllTasks } from 'redux/Tasks/tasksSelectors.js';

const ChoosedMonth = ({ startDay, today }) => {
  // const { startDay, today } = useOutletContext();
  const tasks = useSelector(selectAllTasks);
  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
