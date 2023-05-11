import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CalendarTaskDay } from './CalendarTaskDay/CalendarTaskDay.js';
import { selectAllTasks } from 'redux/Tasks/tasksSelectors.js';

const CalendarTable = ({ startDay, today }) => {
  const navigate = useNavigate();
  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');

  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');
  const tasks = useSelector(selectAllTasks);

  return (
    <>
      <GridWrapper>
        {/* {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader isSelectedMonth key={i}>
            <RowInCell justifyContent={'center'} pr={1}>
              {moment()
                .day(i + 1)
                .format('ddd')}
            </RowInCell>
          </CellWrapper>
        ))} */}

        {daysMap.map(dayItem => (
          <CellWrapper
            isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
            type="button"
            onClick={() => {
              navigate(`/main/calendar/day/${dayItem.format('YYYY-MM-DD')}`);
            }}
          >
            <RowInCell justifyContent={'flex-end'}>
              <ShowDayWrapper>
                <DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </DayWrapper>
              </ShowDayWrapper>
              <TaskListWrapper>
                {tasks
                  .filter(task => task.date === dayItem.format('YYYY-MM-DD'))
                  .map(tasks => tasks.tasks)
                  .reduce((t1, t2) => t1.concat(t2), [])
                  .slice(0, 2)
                  .map(task => (
                    <li key={task._id}>
                      <CalendarTaskDay task={task} />
                    </li>
                  ))}
                {tasks
                  .filter(task => task.date === dayItem.format('YYYY-MM-DD'))
                  .map(tasks => tasks.tasks)
                  .reduce((t1, t2) => t1.concat(t2), []).length > 2 && (
                  <li key="more">
                    <CalendarTableMoreBtn type="button">
                      See all...
                    </CalendarTableMoreBtn>
                  </li>
                )}
              </TaskListWrapper>
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

export const TaskListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style-position: inside;
  padding-left: 4px;
  gap: 2px;
`;
export const CalendarTableMoreBtn = styled.button`
  /* color: var(--btn-text-color); */
  border: none;
  border-radius: 8px;
  color: transparent;
  background-color: var(--main-background-color);
  text-align: start;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  margin-top: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    color: var(--calendar-date-color);
    background-color: var(--main-background-color);
  }
  @media screen and (min-width: 1440px) {
    color: var(--calendar-date-color);
    background-color: var(--main-background-color);
  }
`;
export const TaskItem = styled.button`
  border-radius: 8px;
  padding: 4px 12px 4px 10px;
  border: none;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: start;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
