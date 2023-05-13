import styled from 'styled-components';
import {BsPencil} from 'react-icons/bs'

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
background: #EFEFEF;
border-radius: 8px;
border-color: transparent;
font-weight: 600;
font-size: 14px;
line-height: 18px;
transition: 0.5s;
outline: none;
color: #616161;
cursor: pointer;
&:hover {
    background-color: var(--mainBlue);
    color: white;

    .StyledPencilIcon {
      color: white;
    }
}

@media screen and (min-width: 769px) {
    width:340px;
    height: 48px;
}
`
export const StyledPencilIcon = styled(BsPencil)`
size: 2em;
transition: 200ms;
`