import { Button, NavLinkStyled } from './CalendarButtom.styled';
const date = new Date().toISOString().split('T')[0];
const CalendarButton = () => {
  return (
    <NavLinkStyled to={`/main/calendar/month/${date}`}>
      <Button> CALENDAR</Button>
    </NavLinkStyled>
  );
};

export default CalendarButton;
