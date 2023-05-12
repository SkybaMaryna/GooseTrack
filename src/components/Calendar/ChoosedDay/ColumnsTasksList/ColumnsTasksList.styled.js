import styled from 'styled-components';

export const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 315px;
  height: 100%;
  margin-left: 21px;
  max-height: 376px;
  overflow-y: auto;
  overflow-x: hidden;
 
  &::-webkit-scrollbar {
    width: 8px;
    height: 376px;
    display: true;
    background: var(--scrollBarBg);
    border-radius: 12px;
    
  }
  &::-webkit-scrollbar-thumb {
    background: var(--scrollBar);
    border-radius: 12px;
  }
`;