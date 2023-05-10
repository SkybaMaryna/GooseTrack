// import { FiLogOut } from 'react-icons/fi';
import { Button} from './CalendarButtom.styled';
import { NavLink } from 'react-router-dom';

const CalendarButton = () => {
   return (
    <NavLink to=" /main/calendar/month/">
    <Button> CALENDAR
    </Button>
  </NavLink>
  );
};

export default CalendarButton;
