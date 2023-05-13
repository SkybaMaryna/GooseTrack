import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaRules } from 'hooks/mediaRules';
import {
  Container,
  Image,
  H2,
  Wrapper,
  Motivation,
  Accent,
  Overlay,
  Svg,
} from './Header.styled';
import { selectAllTasks } from 'redux/Tasks/tasksSelectors';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';
import SideBar from '../SideBar/SideBar';
import { selectSideBar } from 'redux/Modal/modalSelectors';
import { closeSideBar, openSideBar } from 'redux/Modal/modalSlice';
import { RxHamburgerMenu } from 'react-icons/rx';
import { selectTheme } from 'redux/Theme/themeSelectors';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isActivePageCalendar = location.pathname.includes('calendar');
  const tasksList = useSelector(selectAllTasks);
  const theme = useSelector(selectTheme);
  const { isMobile, isDesktop, isRetina } = useMediaRules();

  const openMobileMenu = () => dispatch(openSideBar());
  const closeMobileMenu = () => dispatch(closeSideBar());
  const sideBarState = useSelector(selectSideBar);

  const handleOverlayClick = e => {
    if (e.target.classList.contains('overlay')) closeMobileMenu();
  };

  if (sideBarState) {
    document.body.classList.add('lock-scroll');
  } else {
    document.body.classList.remove('lock-scroll');
  }

  return (
    <Container>
      {!isDesktop ? (
        <Wrapper>
          {theme === 'light' ? (
            <Svg onClick={openMobileMenu}>
              {isMobile ? (
                <RxHamburgerMenu size={24} />
              ) : (
                <RxHamburgerMenu size={34} />
              )}
            </Svg>
          ) : (
            <Svg onClick={openMobileMenu}>
              {isMobile ? (
                <RxHamburgerMenu size={24} color="#ffffff" />
              ) : (
                <RxHamburgerMenu size={34} color="#ffffff" />
              )}
            </Svg>
          )}
          <Overlay
            onClick={handleOverlayClick}
            isVisible={sideBarState}
            className="overlay"
          >
            {' '}
            {sideBarState && <SideBar />}{' '}
          </Overlay>
          <Wrapper>
            <ThemeToggler />
            <UserInfo />
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          {tasksList.length > 0 &&
          tasksList[0].taskId !== null &&
          isActivePageCalendar ? (
            <>
              <Image
                src={
                  isRetina
                    ? require('../../../images/header/header_desk@2x.png')
                    : require('../../../images/header/header_desk@2x.png')
                }
                alt="logo"
                width="122"
              />
              <div>
                <H2>Calendar</H2>
                <Motivation>
                  {' '}
                  <Accent>Let go </Accent>of the past and focus on the present!
                </Motivation>
              </div>
            </>
          ) : isActivePageCalendar ? (
            <H2>Calendar</H2>
          ) : (
            <H2>User Profile</H2>
          )}
          <Wrapper>
            <ThemeToggler />
            <UserInfo />
          </Wrapper>
        </Wrapper>
      )}
    </Container>
  );
};

export default Header;
