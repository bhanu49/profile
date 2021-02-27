import { createMuiTheme } from '@material-ui/core';
import image from './images/img.png';

export const ORANGE1 = '#fca072';
export const ORANGE2 = '#e28a48';
export const GREY1 = '#e5e5e5';
export const GREY2 = '#fcfcfc';

const theme = createMuiTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['"texgyreadventor-regular"', '"texgyreadventor-bold"'].join(','),
    h2: {
      fontFamily: 'texgyreadventor-bold',
      fontSize: 60,
      color: '#555555',
    },
    h3: {
      fontFamily: 'texgyreadventor-bold',
      fontSize: 30,
      color: '#555555',
    },
    h5: {
      fontFamily: 'texgyreadventor-bold',
      fontSize: 20,
      color: '#555555',
    },
    h4: {
      fontFamily: 'texgyreadventor-bold',
      fontSize: 28,
      color: '#fff',
    },
    h6: { fontFamily: 'texgyreadventor-regular', color: '#b6b6b6' },
    subtitle1: { fontFamily: 'texgyreadventor-regular', color: '#b6b6b6' },

    caption: { fontFamily: 'texgyreadventor-bold', color: '#555555', fontSize: 16 },
    body2: { fontFamily: 'texgyreadventor-bold', color: '#555555', fontSize: 14 },
    body1: { fontFamily: 'texgyreadventor-regular', color: '#000', fontSize: 14 },
  },
  palette: {
    primary: {
      main: ORANGE1,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: 'url(' + image + ')',
          backgroundColor: 'antiquewhite',
        },
      },
    },
  },
});

export default theme;
