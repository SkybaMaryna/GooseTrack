import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const CalendarTable = ({ startDay, today }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => moment().isSame(day, 'month');
  return (
    <>
      <GridWrapper>
        {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader isSelectedMonth key={i}>
            <RowInCell justifyContent={'center'} pr={1}>
              {moment()
                .day(i + 1)
                .format('ddd')}
            </RowInCell>
          </CellWrapper>
        ))}

        {daysMap.map(dayItem => (
          <CellWrapper
            isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
          >
            <RowInCell justifyContent={'flex-end'}>
              <DayWrapper>
                {!isCurrentDay(dayItem) && dayItem.format('D')}
                {isCurrentDay(dayItem) && (
                  <CurrentDay>{dayItem.format('D')}</CurrentDay>
                )}
              </DayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};

export default CalendarTable;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 1087px;
  height: 625px;
  // position: absolute;
  // left: 321px;
  // top: 243px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  ${props => props.isHeader && `border-bottom: 1px solid #4D4C4D`}
`;
const CurrentDay = styled('div')`
  // height: 100%;
  // width: 100%;
  background: #3e85f3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  /* identical to box height, or 112% */
  text-transform: uppercase;
`;
const DayWrapper = styled.div`
  // height: 26px;
  // width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  padding: 4px 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;

  color: #343434;
`;
export const CellWrapper = styled.div`
  min-height: ${props => (props.isHeader ? 24 : 94)}px;
  min-width: 120px;
  // background-color: ${props => (props.isWeekday ? '#d1d5dc' : '#ffffff')};
  color: ${props => (props.isSelectedMonth ? '#DDDDDD' : '#b9091b')};
  border: 1px solid rgba(220, 227, 229, 0.8);
  ${props =>
    props.isHeader &&
    `border-left: 1px solid #fdfcfd, border-right: 1px solid #fdfcfd`}
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  ${props => props.pr && `padding-right: ${props.pr * 8}px`}
`;
