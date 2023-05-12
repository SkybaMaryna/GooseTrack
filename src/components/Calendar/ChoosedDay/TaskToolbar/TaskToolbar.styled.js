import { FiArrowRightCircle, FiTrash } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';
import styled from 'styled-components';

export const ArrowRight = styled(FiArrowRightCircle)`
color: var(--mainBlack);
width: 16px;
height: 16px;
transition: all ease-in-out 200ms;
:hover{
  color: var(--mainBlue);
}
`

export const Trash = styled(FiTrash)`
color: var(--mainBlack);
width: 16px;
height: 16px;
transition: all ease-in-out 200ms;
:hover{
  color: var(--mainBlue);
}
`

export const Pencil = styled(HiOutlinePencil)`
color: var(--mainBlack);
width: 16px;
height: 16px;
transition: all ease-in-out 200ms;
:hover{
  color: var(--mainBlue);
}
`

export const TaskToolbarStyled = styled.div`
  display: flex;
  position: absolute;
  right: 15px;
  top: 75px;
  gap: 10px;
  flex-direction: row;
  margin: 0 px 0px 0px 0px;
  background-color: none;
  border-bottom: none;
`;

export const TaskToolbarBtn = styled.button`
  padding: 0px;
  margin: 0px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: var(--mainBlack);
  &:hover {
    stroke: #3e85f3;
  }
`;

export const TaskModalChangeStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 30%);
  background: var(--mainWhite);
  border: 1px solid transparent;
  border-radius: 5px;
  width: 147px;
  height: 90px;
  z-index: 1000;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
`;

export const TaskModalChangeStatusBtn = styled.button`
  padding: 0px;
  margin: 0px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--mainBlack);
  &:hover {
    color: #3e85f3;
    stroke: #3e85f3;
  }
`;

export const TaskModalChangeStatusBtnElem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 20px;
  margin: 0px 0px 5px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    color: var(--mainBlue);
    stroke: var(--mainBlue);
  }
`;

export const StateStatus = styled.div`
  margin: 0px 10px 0px 0px;
  padding: 0px 0px 0px 0px;
`;