import {useMediaRules} from '../../../../../hooks/mediaRules'
import {
  MonthCalendarHeaderItem,
  MonthCalendarHeaderList,
} from './MonthCalendarHeader.styled';

export const MonthCalendarHeader = () => {
  const mediaRules = useMediaRules();
  const isMobile = mediaRules.isMobile;
  return (
    <>
      {isMobile ? (
        <MonthCalendarHeaderList>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <MonthCalendarHeaderItem>S</MonthCalendarHeaderItem>
          <MonthCalendarHeaderItem>S</MonthCalendarHeaderItem>
        </MonthCalendarHeaderList>
      ) : (
        <MonthCalendarHeaderList>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <MonthCalendarHeaderItem>Sat</MonthCalendarHeaderItem>
          <MonthCalendarHeaderItem>Sun</MonthCalendarHeaderItem>
        </MonthCalendarHeaderList>
      )}
    </>
  );
};