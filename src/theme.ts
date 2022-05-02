import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF8882',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#26DCC1',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Noto Sans KR, sans-serif',
  },
});
