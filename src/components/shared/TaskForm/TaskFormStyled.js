import { BiPlus } from "react-icons/bi";
import { blueButtonsHover } from "redux/Theme/Theme";
import styled from "styled-components";

export const ButtonsWrapper = styled.div`
display: flex;
gap: 14px;
align-items: center;
max-width: 100%;
margin-top: 32px;

`
export const AddButton = styled.button`
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
width: 135px;
height: 42px;
background: var(--mainBlue);
border-radius: 8px;
border-color: transparent;
box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
padding: 12px, 40px;
color: var(--mainWhite);
font-weight: 600;
font-size: 14px;
line-height: 18px;
transition: 0.5s;
outline: none;
cursor: pointer;
&:hover {
    background-color: ${blueButtonsHover};
}

@media screen and (min-width: 768px) {
    width:182px;
    height: 48px;
}

`
export const StyledPlusIcon = styled(BiPlus)`
color: var(--mainWhite);
`



export const CancelButton = styled.button`
width: 118px;
height: 42px;
background: #EFEFEF;
border-color: transparent;
border-radius: 8px;
padding: 12px, 40px;
text-align: center;
color: black;
font-weight: 600;
font-size: 14px;
line-height: 18px;
transition: 0.5s;
cursor: pointer;
&:hover {
    background-color: var(--mainBlue);
    color: white;
}

@media screen and (min-width: 768px) {
    width:144px;
    height: 48px;
}
`