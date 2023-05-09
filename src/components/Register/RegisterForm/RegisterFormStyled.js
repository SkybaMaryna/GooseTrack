import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Formik)`
max-width: 335px;
display: flex;
flex-direction: column;
align-items: center;
gap: 18px;
`
export const StyledFormInsight = styled(Form)`
max-width: 335px;
display: flex;
background-color: white;
flex-direction: column;
align-items: left;
border-radius: 8px;
margin-left: auto;
margin-right: auto;
padding-top: 40px;
padding-left: 24px;
padding-bottom: 40px;
padding-right: 24px;
`

export const StyedInput = styled.input`
width: 287px;
border: 1px solid rgba(220, 227, 229, 0.6);
border-radius: 8px;
`
export const StyledTitle = styled.h2`
color: #3E85F3;
font-weight: 600;
font-size: 18px;
line-height: 24px;
margin-bottom: 32px;
`
export const StyledLabel = styled.label`
font-weight: 600;
font-size: 12px;
line-height: 15px;
margin-bottom: 8px;
margin-top: 8px;
`
export const StyledInput = styled(Field)`
width: 287px;
height: 46px;
border: 1px solid rgba(220, 227, 229, 0.6);
border-radius: 8px;
`

export const StyledButton = styled.button`
width: 287px;
height: 46px;
margin-top: 32px;
width: 100%;
background: #3E85F3;
box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
border-radius: 16px;
border-color: transparent;
color: white;
display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`

export const StyledError = styled(ErrorMessage)`
margin-top: 8px;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #DA1414;
`