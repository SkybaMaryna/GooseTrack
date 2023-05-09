import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getUserInfoThunk } from 'redux/Auth/authOperations';
import { useEffect } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { StyledContainer } from './MainLayout.styled';
import { selectUser } from 'redux/Auth/authSelectors';

const MainLayout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      dispatch(getUserInfoThunk());
    }
  }, [dispatch, user]);

  return (
    <StyledContainer>
      <header>
        <Header />
      </header>
      <main>
        <SideBar />
        <Outlet />
      </main>
    </StyledContainer>
  );
};

export default MainLayout;
