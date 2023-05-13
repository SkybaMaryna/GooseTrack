import React from 'react';
import {
  DivWrapper,
  TitleWrapper,
  ButtonsWrapper,
  ButtonWrapper1,
  ButtonWrapper2,
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ today, prevHandler, nextHandler, type }) => {
  const currentDate = today.format('DD MMMM YYYY');

  return (
    <DivWrapper>
      <div>
        <TitleWrapper>
          {type === 'month'
            ? currentDate.slice(3, currentDate.length)
            : currentDate}
        </TitleWrapper>
      </div>
      <ButtonsWrapper>
        <ButtonWrapper1 onClick={() => prevHandler(type)}>&lt;</ButtonWrapper1>
        <ButtonWrapper2 onClick={() => nextHandler(type)}>&gt;</ButtonWrapper2>
      </ButtonsWrapper>
    </DivWrapper>
  );
};
export default PeriodPaginator;
