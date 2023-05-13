import TaskColumnCard  from '../TaskColumnCard/TaskColumnCard';
import { TasksListWrapper } from './ColumnsTasksList.styled';


const ColumnsTasksList = ({ tasks=[], getTask }) => {

  return (
    <TasksListWrapper>
      {tasks?.map(task => (
        <TaskColumnCard task={task} key={task._id} getTask={getTask} />
      ))}
    </TasksListWrapper>
  );
};

export default ColumnsTasksList;