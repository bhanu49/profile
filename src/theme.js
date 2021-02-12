import { createMuiTheme } from '@material-ui/core';
import image from './images/img.png';

const theme = createMuiTheme({
  spacing: 8,
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
