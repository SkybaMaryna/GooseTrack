import {
  borderInputModal,
  elementTextColor,
  inputModal,
  mainTextColor,
  scrollBar,
  scrollBarThumb,
  taskBackgroundColor,
  textLabelInputModal,
} from 'redux/Theme/Theme';
import styled from 'styled-components';

export const StyledInputText = styled.input`
  border-radius: 8px;
  border: ${borderInputModal};
  color: ${elementTextColor};
  background-color: ${inputModal};
  cursor: text;
  width: 100%;
  height: 42px;
  padding: 12px 14px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  outline: none;
  @media screen and (min-width: 769px) {
    width: 340px;
    height: 46px;
    padding: 14px 18px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-top: 18px;
`;

export const StyledLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: ${textLabelInputModal};
`;

export const StyledDivTimePicker = styled.div`
  outline: none;
  width: 126px;
  height: 42px;
  border-radius: 8px;
  background-color: ${inputModal};
  border: ${borderInputModal};
  color: ${elementTextColor};
  cursor: text;
  padding: 12px 14px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 163px;
  }

  .react-datepicker__input-container input {
    background-color: transparent;
    border: none;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    outline: none;
    color: ${elementTextColor};
  }

  & .react-ios-time-picker-container {
    z-index: 1000;
    background-color: var(--blackBackground);

    & .react-ios-time-picker-btn-container {
      & .react-ios-time-picker-btn {
        color: #6a6a6b;
      }
    }
  }

  .react-ios-time-picker-popup {
    align-items: center;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: var(--mainBlue);
    color: var(--mainWhite);
    font-weight: bold;
  }

  .react-datepicker {
    border-radius: 8px;
    overflow: hidden;
    &__time-container {
      color: ${mainTextColor};
    }

    &__time {
      background-color: ${taskBackgroundColor};
      &-list {
        &::-webkit-scrollbar {
          width: 4px;
          display: true;
          background: ${scrollBar};
          border-radius: 12px;
        }
        &::-webkit-scrollbar-thumb {
          background: ${scrollBarThumb};
          border-radius: 12px;
        }
      }
    }

    &__header {
      background-color: ${taskBackgroundColor};
    }
    &-time__header {
      color: ${mainTextColor};
    }
  }

`;
