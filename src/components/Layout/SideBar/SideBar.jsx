import UserNav from '../UserNav/UserNav';
import ButtonLogOut from '../LogoutBtn/LogoutBtn';
import {
  H2,
  StyledButton,
  StyledSideBar,
  StyledWrapper,
} from './SideBar.styled';
import { useMediaRules } from 'hooks/mediaRules';
import { useDispatch } from 'react-redux';
import { closeSideBar } from 'redux/Modal/modalSlice';
import { CgClose } from 'react-icons/cg';

const SideBar = () => {
  const { isMobile, isTablet, isDesktop, isRetina } = useMediaRules();
  const dispatch = useDispatch();
  const closeMobileMenu = () => dispatch(closeSideBar());

  return (
    <StyledSideBar>
      <div>
        <StyledWrapper>
          {isMobile && (
            <img
              src={
                isRetina
                  ? require('./../../../images/logo/logo_mob@2x.png')
                  : require('./../../../images/logo/logo_mob@1x.png')
              }
              alt="logo"
              width="122"
            />
          )}
          {isTablet && (
            <img
              src={
                isRetina
                  ? require('./../../../images/logo/logo_tab@2x.png')
                  : require('./../../../images/logo/logo_tab@1x.png')
              }
              alt="logo"
              width="156"
            />
          )}{' '}
          {isDesktop && (
            <img
              src={
                isRetina
                  ? require('./../../../images/logo/logo_desk@2x.png')
                  : require('./../../../images/logo/logo_desk@1x.png')
              }
              alt="logo"
              width="201"
            />
          )}
          <H2>
            G<i>oo</i>seTrack
          </H2>
          {!isDesktop && (
            <StyledButton onClick={closeMobileMenu}>
              <span>
                <CgClose />
              </span>
            </StyledButton>
          )}
        </StyledWrapper>

        <UserNav />
      </div>
      <ButtonLogOut />
    </StyledSideBar>
  );
};
export default SideBar;
