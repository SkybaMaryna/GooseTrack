import { Cross } from '../Cross/Cross';
import { StyledButton, ItemWraper } from './ButtonStyled';

export const Button = ({ actionFu, closeModal, cross, color, bcg, text }) => {
  return (
    <StyledButton bcg={bcg} color={color} onClick={closeModal || actionFu}>
      <ItemWraper>
        {cross && <Cross height={'14px'} bcgCr={'#ffffff'} />}
      </ItemWraper>
      {text}
    </StyledButton>
  );
};
