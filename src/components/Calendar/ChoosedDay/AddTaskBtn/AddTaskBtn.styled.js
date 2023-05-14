import { GoPlus } from 'react-icons/go';
import {
  addTaskBtnColor,
  mainTextColor,
  sideBackgroundColor,
} from 'redux/Theme/Theme';
import styled from 'styled-components';

export const AddTaskBtnStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 304px;
  height: 52px;
  margin: 32px 20px 28px 20px;
  background: ${addTaskBtnColor};
  border: 1px dashed var(--mainBlue);
  border-radius: 8px;
  cursor: pointer;
  transition: all ease-in-out 250ms;
  &:hover {
    background: var(--mainBlue);
    border-style: solid;
    .AddTaskBtnTextStyled {
      color: var(--mainWhite);
    }
  }
`;

export const OutlinePlus = styled(GoPlus)`
  color: ${mainTextColor};
  height: 14px;
  width: 14px;
  transition: all ease-in-out 250ms;
  ${AddTaskBtnStyled}:hover & {
    color: ${sideBackgroundColor};
  }
`;

export const AddTaskBtnIconStyled = styled.div``;

export const AddTaskBtnTextStyled = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${mainTextColor};
  margin-left: 10px;
  transition: all ease-in-out 250ms;
  ${AddTaskBtnStyled}:hover & {
    color: ${sideBackgroundColor};
  }
`;
