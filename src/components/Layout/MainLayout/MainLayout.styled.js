import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;

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
  display: flex;
  justify-content: center;
`;
