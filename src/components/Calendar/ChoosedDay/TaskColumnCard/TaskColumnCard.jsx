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
  if (priority === 'low') {
    return 'var(--rangBlue)';
  }
  if (priority === 'medium') {
    return 'var(--rangYellow)';
  }
  if (priority === 'high') {
    return 'var(--rangPink)';
  }
};
const choosePriorityTextColor = priority => {
  if (priority === 'low') {
    return 'var(--cardGrey)';
  }
  if (priority === 'medium') {
    return 'var(--cardGrey)';
  }
  if (priority === 'high') {
    return 'var(--cardGrey)';
  }
};

const TaskColumnCard = ({ task, getTask }) => {
  const { title, priority } = task;

  const isLoading = useSelector(selectIsIsLoading);
  const userSelector = useSelector(selectUser);
  const name = userSelector?.name || 'Name';
  const avatar = userSelector?.userImgUrl;
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
              ) : !avatar ? (
                <AvatarLetter>{firstLetter}</AvatarLetter>
              ) : (
                <AvatarImg src={avatar} alt="Avatar" />
              )}
            </TaskCardAvatar>
            <TaskCardPriority
              style={{
                backgroundColor: priorityBackgroundColor,
                color: priorityTextColor,
              }}
            >
              {priority[0]?.toUpperCase() + priority.slice(1)}
            </TaskCardPriority>
          </TaskAvatarPriorityWrapper>
          <TaskToolbar getTask={getTask} task={task} />
        </TaskDetailsWrapper>
      </TaskCardWrapper>
    </>
  );
};

export default TaskColumnCard;
