import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import MainLayout from './Layout/MainLayout/MainLayout';
import AccountPage from 'pages/AccountPage/AccountPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import ChoosedDay from './Calendar/ChoosedDay/ChoosedDay';
import ChoosedMonth from './Calendar/ChoosedMonth/ChoosedMonth';
import NotFound from './NotFound/NotFound';
import PrivateRoute from 'hoc/PrivateRoute';
import PublicRoute from 'hoc/PublicRoute';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { refreshThunk } from 'redux/Auth/authOperations';

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path="calendar" element={<CalendarPage />}>
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />
            <Route />
          </Route>
          <Route path="account" element={<AccountPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
