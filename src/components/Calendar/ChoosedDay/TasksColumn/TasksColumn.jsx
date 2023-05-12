import React from "react";
import { ColumnWrapper } from "./TasksColumn.styled";
import  ColumnsTasksList  from '../ColumnsTasksList/ColumnsTasksList'
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn'
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar'


const TasksColumn = ({ getTypeOfColumn, title, tasks=[], getTask }) => {

  return (
    <ColumnWrapper>
      <ColumnHeadBar
        title={title}
        getTypeOfColumn={getTypeOfColumn}
        tasks={tasks}
      />
      {tasks?.length > 0 && <ColumnsTasksList tasks={tasks} getTask={getTask} />}
      <AddTaskBtn getTypeOfColumn={getTypeOfColumn} title={title} />
    </ColumnWrapper>
  );
};

export default TasksColumn;
