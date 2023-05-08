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

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="calendar" element={<CalendarPage />}>
            <Route path="calendar/day/:currentDay" element={<ChoosedMonth />} />
            <Route
              path="calendar/month/:currentDate"
              element={<ChoosedDay />}
            />
            <Route />
          </Route>
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
