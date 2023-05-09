import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { StyledContainer } from './MainLayout.styled';

const MainLayout = () => {
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
