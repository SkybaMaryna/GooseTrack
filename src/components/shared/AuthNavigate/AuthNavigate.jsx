import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavigate = () => {
  return <div>
    <StyledNavLink to="/registration">Sing Up</StyledNavLink>
    <NavLink to="/login">
        <Button>Log in</Button>
      </NavLink>
  </div>;
};

const StyledNavLink = styled(NavLink)`
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

  export const Button = styled.button`
  border-radius: 16px;
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  margin: 4px;
  width: 121px;
  height:49px;
  color: var(--mainBlue);
  background-color: var(--mainWhite);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  cursor: pointer;
  /* &:hover {
    background-color: #2B78EF;
  } */
  `;

export default AuthNavigate;
