import { createMuiTheme } from '@material-ui/core';
import image from './images/img.png';

const theme = createMuiTheme({
  spacing: 8,
  typography: {
    fontFamily: ['"texgyreadventor-regular"', '"texgyreadventor-bold"'].join(','),
    h2: {
      fontFamily: 'texgyreadventor-bold',
      fontSize: 60,
      color: '#555555',
    },
    h4: {
      fontFamily: 'texgyreadventor-bold',
      fontSize: 28,
      color: '#fff',
    },
    h6: { fontFamily: 'texgyreadventor-regular', color: '#b6b6b6' },
    subtitle1: { fontFamily: 'texgyreadventor-regular', color: '#b6b6b6' },
  },
  palette: {},
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
