import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = ({ getTypeOfColumn, getTask, tasks=[] }) => {
const tasksList = tasks[0]?.tasks;

  const filterDone = tasksList?.filter(task => task.category === "done")

  const filterInProgress = tasksList?.filter(task => task.category === "in-progress")
  
  const filterTodo = tasksList?.filter(task => task.category === "to-do")
  


  return (
    <TasksColumnsListWrapper>
      <TasksColumn
        title={'To do'}
        tasks={filterTodo}
        getTypeOfColumn={getTypeOfColumn}
        getTask={getTask}
      />
      <TasksColumn
        title={'In progress'}
        tasks={filterInProgress}
        getTypeOfColumn={getTypeOfColumn}
        getTask={getTask}
      />
      <TasksColumn
        title={'Done'}
        tasks={filterDone}
        getTypeOfColumn={getTypeOfColumn}
        getTask={getTask}
      />
    </TasksColumnsListWrapper>
  );
};

export default TasksColumnsList;
