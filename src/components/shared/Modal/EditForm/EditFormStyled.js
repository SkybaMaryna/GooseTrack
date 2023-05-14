import styled from 'styled-components';
import {BsPencil} from 'react-icons/bs'
import { blueButtonsHover } from 'redux/Theme/Theme';

export const StyledDiv = styled.div`
  width: 100%;
  margin-top: 32px;
`;

export const StyledEditButton = styled.button`
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
width: 267px;
height: 42px;
left: 18px;
padding: 12px;
background: var(--mainBlue);
border-radius: 8px;
border-color: transparent;
box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
font-weight: 600;
font-size: 14px;
line-height: 18px;
transition: 0.5s;
outline: none;
color: var(--mainWhite);
cursor: pointer;
&:hover {
    background-color: ${blueButtonsHover};
}

@media screen and (min-width: 768px) {
    width:340px;
    height: 48px;
}
`
export const StyledPencilIcon = styled(BsPencil)`
size: 2em;
color: var(--mainWhite);
`