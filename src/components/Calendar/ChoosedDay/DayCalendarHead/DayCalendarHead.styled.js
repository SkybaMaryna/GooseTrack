import styled from 'styled-components';

export const Container = styled.div`
  height: 68px;
  width: 1087px;
  padding: 15px 40px;
  background: var(--mainWhite);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: var(--mainWhite);
`;

export const WeekInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 0px 0px;
`;

export const DayOfWeek = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--textGrey);
  margin: 0px 0px 4px 0px;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 26px;
`;

export const DateContainer = styled.button`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  width: 27px;
  height: 26px;
  border-radius: 8px;
  background-color: transparent;
  color: var(--mainBlack);
  padding: 0px 0px 0px 0px;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 400ms;
  &:hover {
    background-color: var(--mainBlue);
    color: var(--lightblue);
  }
`;