import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 100vh;
  background-color: #dcebf7;
  position: relative;
  text-align: center;
  padding-top: 546px;
  @media screen and (min-width: 768px){
    padding-top: 560px; 
    }
`;

export const StyledImg = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 368px;
    height: 521px;
    position: absolute;
    right: 60px;
    bottom: 19px;
  }
`;
export const StyledNavLink = styled(NavLink)`
display: block;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: var(--mainBlue);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

   
`;
