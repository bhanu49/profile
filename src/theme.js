import { createMuiTheme } from '@material-ui/core';
import image from './images/img.png';

export const ORANGE1 = '#fca072';
export const ORANGE2 = '#e28a48';

const theme = createMuiTheme({
  spacing: 8,
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
