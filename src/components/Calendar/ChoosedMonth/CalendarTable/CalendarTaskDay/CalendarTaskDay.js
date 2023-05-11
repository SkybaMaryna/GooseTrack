import { useNavigate } from 'react-router-dom';
import { TaskItem } from '../CalendarTable';

export const CalendarTaskDay = ({ task }) => {
  console.log(task);
  const navigate = useNavigate();
  let priorityColor = '';
  let priorityTextColor = '';

  if (task.priority === 'low') {
    priorityColor = '#ceeefd';
    priorityTextColor = '#72c2f8';
  } else if (task.priority === 'medium') {
    priorityColor = '#fcf0d4';
    priorityTextColor = '#f3b249';
  } else if (task.priority === 'high') {
    priorityColor = '#ffd2dd';
    priorityTextColor = '#ea3d65';
  }
  const handleTaskItemClick = () => {
    navigate(`/calendar/day/${task.date}`); 
  };
  return (
    <TaskItem
      type="button"
      onClick={handleTaskItemClick} 
      style={{ backgroundColor: priorityColor, color: priorityTextColor }}
    >
      {task.title}
    </TaskItem>
  );
};
