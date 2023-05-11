import {
  StyledInput,
  StyledInputText,
  InputWrapper,
  StyledInputContainer,
  StyledLabel,
} from './FormStyled';

export const Form = ({
  titleSetter,
  startSetter,
  endSetter,
  editText,
  startText,
  endText,
  onBlurFu,
  onFocusFu,
}) => {
  return (
    <form  autoComplete="off">
      <InputWrapper>
        <StyledLabel htmlFor="">Title</StyledLabel>
        <StyledInputText
          placeholder="Enter text"
          type="text"
          name="text"
          onChange={titleSetter}
          value={editText}
        />
      </InputWrapper>
      <StyledInputContainer>
        <InputWrapper>
          <StyledLabel htmlFor="">Start</StyledLabel>
          <StyledInput
            type="text"
            name="start"
            onChange={startSetter}
            value={startText}
            onBlur={onBlurFu}
            onFocus={onFocusFu}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="">End</StyledLabel>
          <StyledInput
            type="text"
            name="end"
            onChange={endSetter}
            value={endText}
            onBlur={onBlurFu}
            onFocus={onFocusFu}
          />
        </InputWrapper>
      </StyledInputContainer>
    </form>
  );
};
