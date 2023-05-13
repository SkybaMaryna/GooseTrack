// npm install styled-theming
// import { ThemeProvider } from "styled-components";
// import {light, dark} from "./Theme.styled"

// function App() {
//     return (
//       <ThemeProvider theme={light}>
//         {children}
//       </ThemeProvider>)}npm
import theme from 'styled-theming';

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
export const mainTextColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});
export const calendarTextColor = theme('theme', {
    light: 'var(--cardGrey)',
    dark: 'var(--textGrey)',
  });
  export const calendarHoverColor = theme('theme', {
    light: 'var(--textGrey)',
    dark: 'var(--mainWhite)',
  });
