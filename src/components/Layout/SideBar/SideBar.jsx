import UserNav from '../UserNav/UserNav';
import ButtonLogOut from '../LogoutBtn/LogoutBtn';
import {
  StyledH2,
  StyledImage,
  StyledNavLink,
  StyledSideBar,
  StyledSpan,
  StyledWrapper,
} from './SideBar.styled';
import { useMediaRules } from 'hooks/mediaRules';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar } from 'redux/Modal/modalSlice';
import { CgClose } from 'react-icons/cg';
import { selectTheme } from 'redux/Theme/themeSelectors';

const SideBar = () => {
  const theme = useSelector(selectTheme);
  const { isMobile, isTablet, isDesktop, isRetina } = useMediaRules();
  const dispatch = useDispatch();
  const closeMobileMenu = () => dispatch(closeSideBar());

  return (
    <StyledSideBar>
      <div>
        <StyledWrapper>
          <StyledNavLink to="/">
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
          </StyledNavLink>
          {!isDesktop &&
            (theme === 'light' ? (
              <StyledSpan onClick={closeMobileMenu}>
                {isMobile ? <CgClose size={24} /> : <CgClose size={33} />}
              </StyledSpan>
            ) : (
              <StyledSpan onClick={closeMobileMenu}>
                {isMobile ? (
                  <CgClose size={24} color="#ffffff" />
                ) : (
                  <CgClose size={33} color="#ffffff" />
                )}
              </StyledSpan>
            ))}
        </StyledWrapper>
        <UserNav />
      </div>
      <ButtonLogOut />
    </StyledSideBar>
  );
};
export default SideBar;
