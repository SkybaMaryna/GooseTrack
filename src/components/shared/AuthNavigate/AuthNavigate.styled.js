import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 268px;
  justify-content: space-between;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
    height:40px;
    flex-direction: row;
align-items: center;
  justify-content:center; 
  } 
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: underline;
  font-family: 'Inter';
  color: var(--mainWhite);
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  background-color: var(--mainBlue);
  padding: 12px;
  margin: 4px;
   &:hover {
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);}
  `;

  export const ButtonLogIN = styled.button`
  border-color:var(--mainBlue);
  border-radius: 16px;
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  margin-left: 20px;
  width: 121px;
  height:49px;
  color: var(--mainBlue);
  background-color: var(--mainWhite);
  display: flex;
  align-items: center;
  justify-content:center;
  cursor: pointer;
  `;

  
 export const IconLogIn = styled.span`
 width: 18px;
 height:18px;
 size: 18px;
 padding-top:1px;
 margin-left: 7px;
 `
