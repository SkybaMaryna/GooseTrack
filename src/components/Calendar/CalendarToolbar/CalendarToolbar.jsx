import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';

export const CalendarToolbar = ({ today, prevHandler, nextHandler }) => {
  return (
    <div>
      <PeriodPaginator
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <div />
    </div>
  );
};
