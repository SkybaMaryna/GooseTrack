import { NavLink } from 'react-router-dom';
import { sideBackgroundColor } from 'redux/Theme/Theme';
import styled from 'styled-components';

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  background-color: ${sideBackgroundColor};
  padding-bottom: 24px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 289px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 289px;
    padding-left: 24px;
    padding-top: 32px;
    border-right: solid 1px var(--elementsGrey);
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
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

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const StyledSpan = styled.span`
  cursor: pointer;
`;
