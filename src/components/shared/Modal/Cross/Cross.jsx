import { ModalCloseWrapper } from './CrossStyled';
import { CgClose } from 'react-icons/cg';
export const Cross = ({ func }) => {
  return (
    <ModalCloseWrapper onClick={func}>
      <CgClose />
    </ModalCloseWrapper>
  );
};
