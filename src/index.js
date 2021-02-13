import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import './fonts/ABeeZee/ABeeZee-Regular.ttf';
import './fonts/tex-gyre-adventor-cufonfonts/texgyreadventor-regular.otf';
import './fonts/tex-gyre-adventor-cufonfonts/texgyreadventor-bold.otf';
import './i18n';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
