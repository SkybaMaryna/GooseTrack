import React from 'react';
import styled from 'styled-components';

const PeriodPaginator = ({ today, prevHandler, nextHandler }) => (
  <DivWrapper>
    <div>
      <TitleWrapper>
        {today.format('MMMM')} {today.format('YYYY')}
      </TitleWrapper>
    </div>
    <ButtonsWrapper>
      <ButtonWrapper1 onClick={prevHandler}> &lt; </ButtonWrapper1>
      <ButtonWrapper2 onClick={nextHandler}> &gt; </ButtonWrapper2>
    </ButtonsWrapper>
  </DivWrapper>
);

export default PeriodPaginator;

const DivWrapper = styled('div')`
  display: flex;
  margin-top: 33px;
  margin-bottom: 33px;
  position: relative;
  align-items: center;
`;

const TitleWrapper = styled('span')`
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

const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  border: none;
  margin-left: 8px;
`;

const ButtonWrapper1 = styled('button')`
  height: 34px;
  width: 35px;
  background-color: #ffffff;
  /* color: ${props => (props.unPressed ? '#27282A' : '#565759')}; */
  font-size: 20px;
  color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
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
const ButtonWrapper2 = styled('button')`
  height: 34px;
  width: 35px;
  background-color: #ffffff;
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
