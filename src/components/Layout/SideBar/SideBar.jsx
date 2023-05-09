import UserNav from '../UserNav/UserNav';
import ButtonLogOut from '../LogoutBtn/LogoutBtn';
import { StyledSideBar } from './SideBar.styled';

const SideBar = () => {
  return (
    <StyledSideBar>
      <UserNav />
      <ButtonLogOut />
    </StyledSideBar>
  );
};
export default SideBar;
