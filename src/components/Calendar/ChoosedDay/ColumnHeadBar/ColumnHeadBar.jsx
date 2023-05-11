import  AddTaskBtnHead  from "../AddTaskBtn/AddTaskBtnHead";
import { ColumnHeadWrapper, TitleColumn } from "./ColumnHeadBar.styled";


const ColumnHeadBar = ({ getTypeOfColumn, title, tasks }) => {
  return (
    <ColumnHeadWrapper>
      <TitleColumn>{title}</TitleColumn>
      <div>
        <AddTaskBtnHead
          tasks={tasks}
          getTypeOfColumn={getTypeOfColumn}
          title={title}
        />
      </div>
    </ColumnHeadWrapper>
  );
};

export default ColumnHeadBar;
