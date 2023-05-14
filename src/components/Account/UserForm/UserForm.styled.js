import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 16px;
 
  h2 {
    margin-top: 59px;
    margin-bottom: 4px;
    height: 18px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #343434;
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: calc(14 / 12);
  color: #616161;
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

  p {
    margin-bottom: 8px;
    font-family: 'Inter';
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
  color: #111111;
`;

export const StyledInput = styled(Field)`
  width: 299px;
  height: 42px;
  margin-bottom: 18px;
  padding: 14px 18px;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;
  background: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);
  color: #111111;
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

export const StyledDatePicker = styled(DatePicker)`
  width: 299px;
  height: 42px;
  margin-bottom: 18px;
  padding-left: 18px;
  border: 1px solid rgba(17, 17, 17, 0.15);;
  border-radius: 8px;
  background: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: #111111;
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
  position: relative;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #DA1414;

  /* background-color: #ff0000;
  color: #ffffff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  top: -20px;
  left: 0; */
`

export const StyledIconError = styled(RiErrorWarningLine)`
position: relative;
/* right: 30px;
top: 55%; */
transform: translateY(-50%);
`


export const StyledIconChecked = styled(IoIosCheckmarkCircleOutline)`
position: relative;
/* right: 20px;
top: 51%; */
/* transform: translateY(-50%); */
`