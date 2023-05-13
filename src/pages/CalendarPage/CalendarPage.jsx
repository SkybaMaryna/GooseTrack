import moment from 'moment';
// import { Navigate } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { fetchTasks } from 'redux/Tasks/tasksOperations';
import { CalendarToolbar } from 'components/Calendar/CalendarToolbar/CalendarToolbar';
// import { useParams } from 'react-router-dom';
import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';
import {light} from "../../redux/Theme/Theme.js"
import { ThemeProvider } from "styled-components";
import { selectTheme } from 'redux/Theme/themeSelectors.js';
// import theme from "styled-theming";

const CalendarPage = () => {
  // const { currentDay } = useParams();
  // const navigate = useNavigate();
  const [today, setToday] = useState(moment());
  const dispatch = useDispatch();
  const currentDate = new Date(today);
  const theme = useSelector(selectTheme)

  moment.updateLocale('en', { week: { dow: 1 } });
  const startDay = today.clone().startOf('month').startOf('week');

  const prevHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };
  const nextHandler = () => {
    setToday(prev => prev.clone().add(1, 'month'));
  };

  useEffect(() => {
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth('M') + 1).padStart(2, '0');
    dispatch(fetchTasks({ month, year }));
  }, [currentDate, dispatch]);

  return (<ThemeProvider theme={light}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* <Navigate to={`month/${today}`} />; */}
      <CalendarToolbar
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <ChoosedMonth startDay={startDay} today={today} />

      {/* <Outlet context={{ startDay, today, currentDate }} /> */}
    </div>
      </ThemeProvider>
  );
};

export default CalendarPage;
