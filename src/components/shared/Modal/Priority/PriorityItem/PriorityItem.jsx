import {
  ActiveCircle,
  PriorityCircle,
  PriorityItem,
  StyledPar,
} from '../PriorityStyled';

export const PriorityItems = ({ obj, prioritySelector }) => {
  return obj.map(item => (
    <PriorityItem key={item.key} onClick={prioritySelector}>
      <PriorityCircle color={item.color}>
        {item.status && <ActiveCircle color={item.color}></ActiveCircle>}
      </PriorityCircle>
      <StyledPar>{item.key}</StyledPar>
    </PriorityItem>
  ));
};
