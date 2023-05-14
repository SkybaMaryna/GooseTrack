import { mainBackgroundColor } from 'redux/Theme/Theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background-color: var(mainBackgroundColor);

  @media screen and (min-width: 480px) {
    min-width: 375px;
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const StyledMain = styled.main`
  padding: 24px 20px;
  background-color: ${mainBackgroundColor};
  flex-grow: 1;
  max-width: 375px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 32px;
    max-width: 1151px;
  }
`;
