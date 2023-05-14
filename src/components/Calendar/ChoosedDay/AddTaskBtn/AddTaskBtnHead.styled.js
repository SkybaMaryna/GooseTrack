import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs'
import { mainTextColor } from 'redux/Theme/Theme';

export const AddTaskBtnStyled = styled.button`
  position: absolute;
  top: 27px;
  right: 25px;
  padding: 0px;
  margin: 0px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Plus = styled(BsPlusCircle)`
color: ${mainTextColor};
transition: all ease-in-out 250ms;
stroke-width: 2%;
width: 20px;
height: 20px;
border-radius: 50%;
&:hover {
  color: var(--mainBlue);
}

`
