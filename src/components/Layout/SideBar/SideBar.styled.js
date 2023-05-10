import styled from 'styled-components';

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`;

export const StyledButton = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  background-color: transparent;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  gap: 39px;
  align-items: center;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    gap: 36px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const StyledH2 = styled.h2`
  text-align: center;
  font-family: 'Coolvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--mainBlue);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const StyledImage = styled.img`
  width: 36px;
  height: 35px;
  margin-right: 6px;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
    margin-right: 6px;
  }
  @media screen and (min-width: 1440px) {
    width: 64px;
    height: 60px;
    margin-right: 10px;
  }
`;
