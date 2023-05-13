import theme from 'styled-theming';
// --- background ---
export const mainBackgroundColor = theme('mode', {
  light: 'var(--cardGrey)',
  dark: 'var(--mainBlack)',
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
//   ---text---
export const mainTextColor = theme('mode', {
  light: 'var(--mainBlack)',
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
//   --- border---
export const buttonBorderColor = theme('mode', {
  light: '1px dashed var(--mainBlue)',
  dark: 'var(--mainBlue)',
});
