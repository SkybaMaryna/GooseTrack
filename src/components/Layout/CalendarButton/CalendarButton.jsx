// import { FiLogOut } from 'react-icons/fi';
import { Button, NavLinkStyled} from './CalendarButtom.styled';


const CalendarButton = () => {
   return (
    <NavLinkStyled to="/main/calendar/month/:currentDate">
    <Button> CALENDAR
    </Button>
  </NavLinkStyled>
  );
};

export default CalendarButton;
