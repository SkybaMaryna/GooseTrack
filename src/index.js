import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
li {
  list-style: none;
}
a {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

p {
  padding: 0;
  margin: 0;
}

body {
  &.dark-mode {
      background-color: var(--mainBlack);
}
}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/GooseTrack">
      <Provider store={store}>
        <App />
        <ToastContainer autoClose={4000} theme="colored" />
      </Provider>
      <Global />
    </BrowserRouter>
  </PersistGate>
  // </React.StrictMode>
);
