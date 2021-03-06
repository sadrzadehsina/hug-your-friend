import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { ThemeProvider } from '@material-ui/styles';
import {
  CssBaseline,
  createMuiTheme,
} from '@material-ui/core';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { ToastsProvider } from '@Lib/toasts';
import { FirebaseProvider } from '@Lib/firebase';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FB2839' },
    secondary: { main: '#FFEFD6' },
    success: { main: '#679E1A' },
    error: { main: '#FB2839' },
    warning: { main: '#FB120E' },
    info: { main: '#0B0C09' },
    white: { ligth: '#F8F8F8', main: '#EEEEEE', dark: '#AAAAAA' },
    black: { main: '#0B0C09' }
  },
  typography: { fontFamily: 'Titillium Web' },
});

WebFont.load({ google: { families: ['Titillium Web'] } });

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastsProvider>
        <FirebaseProvider config={firebaseConfig} appName='hug-your-friend'>
          <App />
        </FirebaseProvider>
      </ToastsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
