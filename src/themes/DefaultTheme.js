import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(35, 50, 56, 0.54)',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#fff',
      },
    },
  },
  palette: {
    primary: {
      light: '#0088BA',
      main: '#007FAD',
      dark: '#006C93',
    },
    secondary: {
      light: '#E6204C',
      main: '#D91E48',
      dark: '#BF1A40',
    },
    error: {
      light: '#E6204C',
      main: '#D91E48',
      dark: '#BF1A40',
    },
    text: {
      primay: 'rgba(35, 50, 56, 1.0)',
      secondary: 'rgba(35, 50, 56, 0.54)',
      disabled: 'rgba(35, 50, 56, 0.38)',
    },
  },
});
