import { CrossIconStyled, ModalCloseWrapper } from './CrossStyled';
export const Cross = ({ func }) => {
  return (
    <ModalCloseWrapper onClick={func}>
      <CrossIconStyled/>
    </ModalCloseWrapper>
  );
};
