import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    dimensions: {
      footerHeight: number;
    };
  }
  interface ThemeOptions {
    dimensions?: {
      footerHeight?: number;
    };
  }
}

const theme = createTheme({
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
  dimensions: {
    footerHeight: 70,
  },
});

export default theme;
