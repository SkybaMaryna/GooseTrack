import UserNav from '../UserNav/UserNav';
import ButtonLogOut from '../LogoutBtn/LogoutBtn';
import {
  StyledH2,
  StyledImage,
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
            <StyledImage
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
            <StyledImage
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
            <StyledImage
              src={
                isRetina
                  ? require('./../../../images/logo/logo_desk@2x.png')
                  : require('./../../../images/logo/logo_desk@1x.png')
              }
              alt="logo"
              width="201"
            />
          )}
          <StyledH2>
            G<i>oo</i>seTrack
          </StyledH2>
          {!isDesktop && (
            <span onClick={closeMobileMenu}>
              {isMobile ? <CgClose size={24} /> : <CgClose size={33} />}
            </span>
          )}
        </StyledWrapper>

        <UserNav />
      </div>
      <ButtonLogOut />
    </StyledSideBar>
  );
};
export default SideBar;
