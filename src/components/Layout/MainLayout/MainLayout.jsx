import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getUserInfoThunk } from 'redux/Auth/authOperations';
import { useEffect } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { StyledContainer, StyledMain } from './MainLayout.styled';
import { selectUser } from 'redux/Auth/authSelectors';
import { useMediaRules } from 'hooks/mediaRules';
import { selectSideBar } from 'redux/Modal/modalSelectors';

const MainLayout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const { isDesktop } = useMediaRules();
  const sideBarState = useSelector(selectSideBar);

  useEffect(() => {
    if (user === null) {
      dispatch(getUserInfoThunk());
    }
  }, [dispatch, user]);

  return (
    <StyledContainer>
      {isDesktop && !sideBarState ? <SideBar /> : null}
      <StyledMain>
        <Header />
        <Outlet />
      </StyledMain>
    </StyledContainer>
  );
};

export default MainLayout;
