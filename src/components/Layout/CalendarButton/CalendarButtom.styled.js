import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  background: var(--mainWhite);
  width: 150px;
  padding: 8px 18px;
  border-radius: 16px;
  font-family: 'Inter';
  font-size: 20px;
  line-height: 1.25;
  color: var(--mainBlue);
  font-weight: 700;
  border-color: var(--mainBlue);
  margin: 0 auto 140px auto;
  text-align: center;
  width: 150px;
  cursor: pointer;
  &:hover {
    background: var(--mainLightblue);
    box-shadow: 4px 2px 10px rgba(136, 165, 191, 0.8);
   };
   @media screen and (min-width: 768px) {
     margin-bottom: 0 auto;
  }
`;
export const NavLinkStyled = styled(NavLink)`
margin: 0 auto;
`