import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

export const PeriodTypeSelect = ({ today, onChangeType }) => {
  const location = useLocation();
  const isMonthRoute = location.pathname.includes('month');
  const isDayRoute = location.pathname.includes('day');

  return (
    <List>
      <Item>
        <StyledNavLink
          className={`${isMonthRoute ? 'active' : ''} month`}
          to={`month/${today.format('YYYY-MM-DD')}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          className={`${isDayRoute ? 'active' : ''} day`}
          to={`day/${moment().format('YYYY-MM-DD')}`}
          onClick={() => onChangeType('day')}
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};

// import { useNavigate } from 'react-router-dom';
// import {
//   PeriodTypeSelectButtonDay,
//   PeriodTypeSelectButtonMonth,
//   PeriodTypeSelectWrap,
// } from './PeriodTypeSelect.styled';
// import moment from 'moment';

// export const PeriodTypeSelect = () => {
//   const navigate = useNavigate();
//   return (
//     <PeriodTypeSelectWrap>
//       <PeriodTypeSelectButtonMonth
//         type="button"
//         onClick={() => navigate('/main/calendar/month/:currentDate')}
//       >
//         Month
//       </PeriodTypeSelectButtonMonth>
//       <PeriodTypeSelectButtonDay
//         type="button"
//         onClick={() =>
//           navigate(`/main/calendar/day/${moment().format('YYYY-MM-DD')}`)
//         }
//       >
//         Day
//       </PeriodTypeSelectButtonDay>
//     </PeriodTypeSelectWrap>
//   );
// };
