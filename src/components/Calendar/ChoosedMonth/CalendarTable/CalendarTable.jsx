import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const CalendarTable = ({ startDay, today }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');
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
  grid-template-rows: repeat(4, 1fr);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  background-color: #ffffff;
`;

const CurrentDay = styled('div')`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e85f3;
  border-radius: 8px;
  color: #ffffff;
  margin-bottom: 3px;
`;
const DayWrapper = styled.div`
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
`;
export const CellWrapper = styled.div`
  width: 155px;
  height: 125px;
  cursor: pointer;
  padding: 12px 10px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  color: ${props => (props.isSelectedMonth ? ' #343434' : 'transparent')};
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`;
