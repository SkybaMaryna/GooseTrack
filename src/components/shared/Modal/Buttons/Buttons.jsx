import {AddButtons} from '../AddButtons/Addbuttons'
// import { EditButtons } from '../EditButtons/EditButtons';
import { ButtonsWrapper } from './ButtonsStyled';

export const Buttons = ({ actionFu, closeModal, typeOfButton }) => {
  return (
    <ButtonsWrapper>
      {typeOfButton === 'add' && (
        <AddButtons closeModal={closeModal} actionFu={actionFu} />
      )}

      {/* {typeOfButton === 'edit' && (
        <EditButtons text={'Edit'} closeModal={closeModal} />
      )} */}
    </ButtonsWrapper>
  );
};
