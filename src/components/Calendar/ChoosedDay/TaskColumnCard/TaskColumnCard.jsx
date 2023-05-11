import {
  TaskCardWrapper,
  TaskCardDescription,
  TaskCardAvatar,
  TaskCardPriority,
  TaskDetailsWrapper,
  TaskAvatarPriorityWrapper,
  AvatarLetter,
  AvatarImg,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import { useSelector } from 'react-redux';
import { selectIsIsLoading, selectUser } from 'redux/Auth/authSelectors';

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + '...';
  }
};

const choosePriorityBackgroundColor = priority => {
  if (priority === 'Low') {
    return '#72C2F8';
  }
  if (priority === 'Medium') {
    return '#F3B249';
  }
  if (priority === 'High') {
    return '#EA3D65';
  }
};
const choosePriorityTextColor = priority => {
  if (priority === 'Low') {
    return '#F7F6F9';
  }
  if (priority === 'Medium') {
    return '#F7F6F9';
  }
  if (priority === 'High') {
    return '#F7F6F9';
  }
};

const TaskColumnCard = ({ task, getTask }) => {
  const { title, priority } = task;

  const isLoading = useSelector(selectIsIsLoading);
  const userSelector = useSelector(selectUser);
  const name = userSelector.user?.name || 'Name';
  const avatar = userSelector.user?.avatarURL;
  const firstLetter = name.trim().slice(0, 1).toUpperCase();

  const originalString = title;
  const maxLengthString = 31;

  const truncatedString = truncateString(originalString, maxLengthString);
  const priorityBackgroundColor = choosePriorityBackgroundColor(priority);
  const priorityTextColor = choosePriorityTextColor(priority);

  return (
    <>
      <TaskCardWrapper>
        <TaskCardDescription>{truncatedString}</TaskCardDescription>
        <TaskDetailsWrapper>
          <TaskAvatarPriorityWrapper>
            <TaskCardAvatar>
              {isLoading ? (
                <AvatarLetter>{firstLetter}</AvatarLetter>
              ) : avatar === null ? (
                <AvatarLetter>{firstLetter}</AvatarLetter>
              ) : (
                <AvatarImg src={avatar} alt="Avatar" />
              )}
            </TaskCardAvatar>
            <TaskCardPriority style={{ backgroundColor: priorityBackgroundColor, color: priorityTextColor, }}>
              {priority}
            </TaskCardPriority>
          </TaskAvatarPriorityWrapper>
          <TaskToolbar getTask={getTask} task={task} />
        </TaskDetailsWrapper>
      </TaskCardWrapper>
    </>
  );
};

export default TaskColumnCard;
