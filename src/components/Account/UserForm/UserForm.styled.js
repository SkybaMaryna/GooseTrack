import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AccountFormInput, calendarBackgroundColor, elementTextHoverColor, mainTextColor } from 'redux/Theme/Theme';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'


export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  background: ${calendarBackgroundColor};
  border-radius: 16px;
 
  h2 {
    margin-top: 59px;
    margin-bottom: 4px;
    height: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: calc(18 / 14);
    color: ${mainTextColor};
    @media screen and (min-width: 768px) {
      margin-bottom: 8px;
      margin-top: 0px;
      font-size: 18px;
      line-height: calc(18 / 18);
    }
  }
`;

export const StyledUser = styled.p`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);
  color: var(--textGrey);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    position: unset;
  }
`;

export const StyledBlockInput = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 299px;
  height: 392px;
  margin-bottom: 8px;

  p {
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
  
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 458px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 758px;
    height: 264px;
  }
`;

export const StyledLabelInput = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${AccountFormInput};
  height: auto;
`;

export const StyledInput = styled(Field)`
  width: 299px;
  height: 42px;
  margin-bottom: 18px;
  padding: 14px 18px;
  padding-right: 28px;
  border: 1px solid var(--textGrey);
  border-radius: 8px;
  background: transparent;
  font-style: normal;
  font-family: 'Inter';

  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);
  color: ${mainTextColor};
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    width: 354px;
    height: 46px;
    font-size: 16px;
    line-height: calc(18 / 16);
    
  }
  &:focus {
      border-color: #3e85f3;
      outline: none;
    }
    
`;

export const DatePickerWrap = styled.div`
  .react-datepicker {
    border-radius: 16px;
    overflow: hidden;
    border: none;
    &__header {
      background-color: var(--mainBlue);
      color: var(--mainWhite);
    }
    &__month-container {
      background-color: var(--mainBlue);
    }
    &__day {
      color: var(--mainWhite);
      &:hover {
          border-radius: 50%;
          background-color: var(--lightblue);
          color: var(--mainBlue);
          opacity: 0.7;
          
        }
      &--weekend {
        opacity: 40%;
      }
      &--today {
        border-radius: 50%;
        opacity: 1;
        background-color: var(--mainWhite);
        color: var(--mainBlue);
        
      }
      &--selected {
        border-radius: 50%;
        opacity: 1;
        background-color: var(--lightblue);
        color: var(--mainBlue);
        outline: none;
      }
      &--keyboard-selected {
        border-radius: 50%;
        opacity: 1;
        background-color: var(--lightblue);
        color: var(--mainBlue);
        outline: none;
      }
    }
    &__day-name {
      color: var(--mainWhite);
    }
    &__current-month {
      color: var(--mainWhite);
    }
    &__year {
      
    }
    &__navigation--years {
      background-color: var(--lightblue);
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 5px auto;
      &:hover {
        background-color: var(--mainBlue);
        border: 1px solid var(--mainWhite);
      }
      
    }
    &__year-option {
      background-color: var(--mainBlue);
      color: var(--mainWhite);
      &:hover {
        background-color: var(--mainBlue);
        font-size:14px;
        font-weight: 700;
      }      
    }
    &__year-dropdown {
      background-color: var(--mainBlue);
      &::-webkit-scrollbar {
        width: 5px;
    background: var(--mainBlue);
    border-radius: 12px;
    
  }
  &::-webkit-scrollbar-thumb {
    background: var(--lightblue);
    border-radius: 12px;

  }
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 299px;
  height: 42px;
  margin-bottom: 18px;
  padding-left: 18px;
  border: 1px solid var(--textGrey);
  border-radius: 8px;
  background: transparent;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${mainTextColor};
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }

  &:focus {
      border-color: #3e85f3;
      outline: none;
    }
`;

export const StyledInputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const StyledImgBtn = styled.img`
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledLabelImg = styled.label`
  position: absolute;
  left: 43px;
  top: 62px;
  @media screen and (min-width: 768px) {
    left: 76px;
    top: 106px;
  }
`;

export const StyledContainerImg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 115px;
  top: -30px;
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  background: #ffffff;
  @media screen and (min-width: 768px) {
    position: relative;
    margin-top: 40px;
    margin-bottom: 14px;
    left: 0px;
    top: 0px;
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const StyledImgAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const StyledSvgAvatar = styled.svg`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const StyledVectorPng = styled.svg`
  position: absolute;
  transform: rotate(270deg);
  stroke: #111111;
  fill: none;
  left: 260px;
  bottom: 175px;
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    left: 310px;
    bottom: 219px;
  }
  @media screen and (min-width: 1440px) {
    left: 314px;
    bottom: 118px;
  }
`;



export const StyledBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0;
  width: 195px;
  height: 46px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  background: #3e85f3;
  color: #ffffff;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    margin-top: 22px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
  }
  &:hover {
    border: 1px solid #42b8cc;
  }
  &:active {
    filter: blur(0.1rem);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage) `
  position: absolute;
  top: 50px;
font-weight: 400;
font-size: 10px;
line-height: 14px;
color: #DA1414;

`

export const StyledIconError = styled(RiErrorWarningLine)`
position: relative;
height: 25px;
width: 25px;
transform: translateY(-20%);
`


export const StyledIconChecked = styled(IoIosCheckmarkCircleOutline)`
position: relative;
height: 25px;
width: 25px;
transform: translateY(-20%);
`

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const StyledIconWrapper = styled.div`
  position: absolute;
  top: 42%;
  right: 4px;
  transform: translateY(-50%);
 `

 
export const ChevronDown = styled(MdOutlineKeyboardArrowDown)`
position: absolute;
top: 52%;
left: 88%;
cursor: pointer;
&:hover {
  color: ${elementTextHoverColor};
}


@media screen and (min-width: 768px) {
  top: 50%;
}
@media screen and (min-width: 1440px) {
  top: 50%;
  left: 42%;
}
`