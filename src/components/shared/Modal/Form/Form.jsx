import {
  // StyledInput,
  StyledInputText,
  InputWrapper,
  StyledInputContainer,
  StyledLabel,
  StyledDivTimePicker,
} from './FormStyled';

import { TimePicker } from 'react-ios-time-picker';

export const Form = ({
  titleSetter,
  startSetter,
  endSetter,
  enterText,
  startTime,
  endTime,
}) => {
console.log(enterText);
  return (
    <form  autoComplete="off">
      <InputWrapper>
        <StyledLabel htmlFor="">Title</StyledLabel>
        <StyledInputText
          placeholder="Enter text"
          type="text"
          name="text"
          onChange={titleSetter}
          value={enterText}
        />
      </InputWrapper>
      <StyledInputContainer>
        <InputWrapper>
          <StyledLabel htmlFor="">Start</StyledLabel>
          <StyledDivTimePicker>
          <TimePicker onChange={startSetter} value={startTime} />
          </StyledDivTimePicker>
        
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="">End</StyledLabel>
          <StyledDivTimePicker>
          <TimePicker onChange={endSetter} value={endTime}/>
          </StyledDivTimePicker>    
        </InputWrapper>
      </StyledInputContainer>
    </form>
  );
};

