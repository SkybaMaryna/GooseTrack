import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';

const AuthNavigate = () => {
  return (
    <LinksBox>
      <StyledNavLink to="/register">Sign Up</StyledNavLink>
      <NavLink to="/login">
        <ButtonLogIN>
          Log in
          <IconLogIn>
            <FiLogIn />
          </IconLogIn>
        </ButtonLogIN>
      </NavLink>
    </LinksBox>
  );
};
const LinksBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
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
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;

export const ButtonLogIN = styled.button`
  border-color: var(--mainBlue);
  border-radius: 16px;
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  margin-left: 20px;
  width: 121px;
  height: 49px;
  color: var(--mainBlue);
  background-color: var(--mainWhite);
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48); */
  cursor: pointer;
  /* &:hover {
    background-color: #2B78EF;
  } */
`;
const IconLogIn = styled.span`
  width: 18px;
  height: 18px;
  size: 18px;
  padding-top: 1px;
  margin-left: 7px;
`;

export default AuthNavigate;
