import { scrollBar, scrollBarThumb } from 'redux/Theme/Theme';
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
    background: ${scrollBar};
    border-radius: 12px;
    z-index: 2;
    
  }
  &::-webkit-scrollbar-thumb {
    background: ${scrollBarThumb};
    border-radius: 12px;
  }
`;