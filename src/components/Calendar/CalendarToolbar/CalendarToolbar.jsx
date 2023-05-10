import PeriodPaginator from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { ToolbarWrapper } from './CalendarToolbar.styled';
export const CalendarToolbar = ({ today, prevHandler, nextHandler }) => {
  return (
    <ToolbarWrapper>
      <PeriodPaginator
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <PeriodTypeSelect />
    </ToolbarWrapper>
  );
};
