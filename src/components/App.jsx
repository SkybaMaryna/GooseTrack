import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/Auth/authOperations';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from '../redux/Theme/themeSelectors';
import { logout } from 'redux/Auth/authSlice';
import { Suspense } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import AccountPage from 'pages/AccountPage/AccountPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import ChoosedDay from './Calendar/ChoosedDay/ChoosedDay';
import ChoosedMonth from './Calendar/ChoosedMonth/ChoosedMonth';
import NotFound from './NotFound/NotFound';
import PrivateRoute from 'hoc/PrivateRoute';
import PublicRoute from 'hoc/PublicRoute';
import Loader from './shared/Loader/Loader';
import moment from 'moment';

const MainLayout = lazy(() => import('./Layout/MainLayout/MainLayout'));

export const App = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  moment.updateLocale('en', { week: { dow: 1 } });

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (401 === error.response.status) {
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/login');
      } else {
        return Promise.reject(error);
      }
    }
  );

  return (
    <div>
      <ThemeProvider theme={{ mode: theme }}>
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
                <Suspense fallback={<Loader />}>
                  <MainLayout />
                </Suspense>
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
      </ThemeProvider>
    </div>
  );
};
