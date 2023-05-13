import { CgClose } from 'react-icons/cg';
import { mainTextColor } from 'redux/Theme/Theme';
import styled from 'styled-components';

export const ModalCloseWrapper = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 14px;
  top: 14px;
`;

export const CrossIconStyled = styled(CgClose)`
color: ${mainTextColor};
`
