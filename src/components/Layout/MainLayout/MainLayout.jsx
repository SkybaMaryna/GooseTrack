import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getUserInfoThunk } from 'redux/Auth/authOperations';
import { useEffect } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { StyledContainer, StyledMain } from './MainLayout.styled';
import { selectIsLoggedIn, selectUser } from 'redux/Auth/authSelectors';
import { useMediaRules } from 'hooks/mediaRules';

const MainLayout = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { isDesktop } = useMediaRules();

  useEffect(() => {
    if (user === null) {
      dispatch(getUserInfoThunk());
    }
  }, [dispatch, user]);

  return (
    <StyledContainer>
      <header>{isLoggedIn && <Header />}</header>
      <StyledMain>
        {isLoggedIn && isDesktop && <SideBar />}
        <Outlet />
      </StyledMain>
    </StyledContainer>
  );
};

export default MainLayout;
