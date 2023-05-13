import {AddButtons} from '../AddButtons/Addbuttons'
import { ButtonsWrapper } from './ButtonsStyled';

export const Buttons = ({ actionFu, closeModal, typeOfButton }) => {
  return (
    <ButtonsWrapper>
      {/* {typeOfButton === 'add' && (
        <AddButtons closeModal={closeModal} actionFu={actionFu} />
      )} */}
    </ButtonsWrapper>
  );
};
