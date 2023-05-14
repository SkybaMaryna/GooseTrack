import { PriorityItems } from './PriorityItem/PriorityItem';
import { PriorityWraper } from '../Priority/PriorityStyled';

export const Priority = ({ prioritySelector, func, obj }) => {
  return (
    <PriorityWraper onClick={func}>
      <PriorityItems obj={obj} prioritySelector={prioritySelector} />
    </PriorityWraper>
  );
};
