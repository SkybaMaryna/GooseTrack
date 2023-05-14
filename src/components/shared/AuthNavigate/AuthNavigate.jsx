import { NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import {
  ButtonLogIN,
  IconLogIn,
  LinksBox,
  StyledNavLink,
} from './AuthNavigate.styled';

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

export default AuthNavigate;
