import theme from 'styled-theming';

export const mainBackgroundColor = theme('mode', {
  light: 'var(--cardGrey)',
  dark: 'var(--darkBackground)',
});
export const sideBackgroundColor = theme('mode', {
  light: 'var(--mainWhite)',
  dark: 'var(--mainBlack)',
});
export const calendarBackgroundColor = theme('mode', {
  light: 'var(--mainWhite)',
  dark: 'var(--blackBackground)',
});
export const addFieldBackgroundColor = theme('mode', {
  light: 'var(--lightblue)',
  dark: 'var(--mainBlue)',
});
export const elementBackgroundColor = theme('mode', {
  light: 'var(--lightblue)',
  dark: 'var(--blackBackground)',
});
export const elementHoverBackgroundColor = theme('mode', {
  light: 'var(--lightblueHover)',
  dark: 'var(--mainBlue)',
});
export const greyButtonBackgroundColor = theme('mode', {
  light: 'var(--elementsGrey)',
  dark: 'var(--mainWhite)',
});


export const mainTextColor = theme('mode', {
  light: 'var(--mainBlack)',
  dark: 'var(--mainWhite)',
});
export const secondTextColor = theme('mode', {
  light: 'var(--blackSecond)',
  dark: 'var(--mainWhite)',
});
export const calendarTextColor = theme('mode', {
  light: 'var(--cardGrey)',
  dark: 'var(--textGrey)',
});
export const calendarHoverColor = theme('mode', {
  light: 'var(--textGrey)',
  dark: 'var(--mainWhite)',
});
export const elementTextColor = theme('mode', {
  light: 'var(--subtitleGrey)',
  dark: 'var(--mainWhite)',
});
export const elementTextHoverColor = theme('mode', {
  light: 'var(--mainBlue)',
  dark: 'var(--mainWhite)',
});

export const buttonBorderColor = theme('mode', {
  light: '1px dashed var(--mainBlue)',
  dark: 'var(--mainBlue)',
});
export const taskBackgroundColor = theme('mode', {
  light: 'var(--cardGrey)',
  dark: 'var(--darkBackground)',
});
export const scrollBar = theme('mode', {
  light: 'var(--scrollBarBg)',
  dark: 'var(--darkScrollBarBg)',
});
export const scrollBarThumb = theme('mode', {
  light: 'var(--scrollBar)',
  dark: 'var(--darkBackground)',
});
export const addTaskBtnColor = theme('mode', {
  light: 'var(--lightblue)',
  dark: 'var(--mainBlue)',
});
export const addTaskBtnHover = theme('mode', {
  light: 'var(--mainBlue)',
  dark: 'var(--lightblue)',
});
export const textLabelInputModal = theme('mode', {
  light: 'rgba(52, 52, 52, 0.8)',
  dark: 'rgba(250, 250, 250, 0.3)',
});
export const inputModal = theme('mode', {
  light: '#F7F7F7;',
  dark: 'var(--mainBlack)',
});
export const borderInputModal = theme('mode', {
  light: 'none',
  dark: '1px solid rgba(255, 255, 255, 0.15)',
});
export const blueButtonsHover = theme('mode', {
  light: 'var(--mainBlue)',
  dark: '#2B78EF',
});
export const AccountFormInput = theme('mode', {
  light: 'var(--mainBlack)',
  dark: 'var(--textGrey)'
})
