import ReactDatePicker from 'react-datepicker';
import {
  StyledInputText,
  InputWrapper,
  StyledInputContainer,
  StyledLabel,
  StyledDivTimePicker,
} from './FormStyled';

export const Form = ({
  titleSetter,
  startSetter,
  endSetter,
  enterText,
  startTime,
  endTime,
}) => {
  const timeToDate = time => {
    if (!time) return null;
    const todayStart = new Date();
    const startParts = time.includes('-') ? time.split('-') : time.split(':');
    todayStart.setHours(startParts[0]);
    todayStart.setMinutes(startParts[1]);
    return todayStart;
  };
  let todayStart = timeToDate(startTime);
  let todayEnd = timeToDate(endTime);

  return (
    <form autoComplete="off">
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
            <ReactDatePicker
              onChange={date => startSetter(date)}
              selected={todayStart}
              showTimeSelect
              showTimeSelectOnly
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="HH:mm"
            />
          </StyledDivTimePicker>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="">End</StyledLabel>
          <StyledDivTimePicker>
            <ReactDatePicker
              onChange={date => endSetter(date)}
              selected={todayEnd}
              showTimeSelect
              showTimeSelectOnly
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="HH:mm"
            />
          </StyledDivTimePicker>
        </InputWrapper>
      </StyledInputContainer>
    </form>
  );
};
