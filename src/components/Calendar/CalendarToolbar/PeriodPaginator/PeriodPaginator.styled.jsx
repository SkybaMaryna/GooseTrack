import styled from 'styled-components';
import {calendarBackgroundColor, calendarHoverColor, calendarTextColor} from '../../../../redux/Theme/Theme.js';

export const DivWrapper = styled('div')`
  display: flex;
  margin-top: 33px;
  margin-bottom: 33px;
  position: relative;
  align-items: center;
`;

export const TitleWrapper = styled('span')`
  width: 170px;
  height: 34px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;

  padding: 8px 12px;
  gap: 8px;

  width: 131px;
  height: 34px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
`;

export const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  border: none;
  margin-left: 8px;
`;
export const ButtonWrapper1 = styled('button')`
  height: 34px;
  width: 35px;
  background-color: ${calendarBackgroundColor};
  /* color: ${props => (props.unPressed ? '#27282A' : '#565759')}; */
  font-size: 20px;
  color: ${calendarTextColor};
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  /* color: ${props => (props.unPressed ? '#a4a6a9' : '#E6E6E6')}; */
  cursor: pointer;
  &:hover {
    color: ${calendarHoverColor};
  }
  /* &:not(:last-child) {
    margin-right: 2px;
  } */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
export const ButtonWrapper2 = styled('button')`
  height: 34px;
  width: 35px;
  background-color: ${calendarBackgroundColor};
  /* color: ${props => (props.unPressed ? '#27282A' : '#565759')}; */
  font-size: 20px;
  color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  /* color: ${props => (props.unPressed ? '#a4a6a9' : '#E6E6E6')}; */
  cursor: pointer;
  &:hover {
    color: #565759;
  }
  /* &:not(:last-child) {
    margin-right: 2px;
  } */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
