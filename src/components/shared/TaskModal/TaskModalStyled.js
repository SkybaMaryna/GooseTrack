import styled from 'styled-components';

export const ModalBody = styled.div`
  width: 303px;
  height: 336px;
  position: absolute;
  background-color: var(--mainWhite);
  z-index: 2;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  padding: 48px 18px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 396px;
    height: 360px;
    padding: 62px, 28px;
  }
`;

export const DivOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(47, 48, 58, 0.6);
  z-index: 2;
  overflow: hidden;
  /* opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};  */
  opacity: 1;
  visibility: visible;
  /* visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')}; */
  /* visibility: 'visible'; */
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
    left 0.3s ease-in-out;
`;
