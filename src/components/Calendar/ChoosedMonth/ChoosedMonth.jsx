import { useOutletContext } from 'react-router-dom';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './CalendarTable/MonthCalendarHeader/MonthCalendarHeader';

const ChoosedMonth = () => {
  const { startDay, today, totalDays } = useOutletContext();
  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} totalDays={totalDays} />
    </>
  );
};

export default ChoosedMonth;
