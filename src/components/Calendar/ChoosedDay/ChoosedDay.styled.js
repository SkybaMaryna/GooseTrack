import styled from 'styled-components';

export const TasksColumnsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 704px;
    height: 14px;
    display: true;
    background: #f7f6f9;
    border-radius: 12px;
    transform: rotate(-90deg);
  }
  &::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    border-radius: 12px;
  }
`;