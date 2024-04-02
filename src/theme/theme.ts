// utils
import { createTheme } from '@mui/material/styles';
// constants
import { red } from '@mui/material/colors';
import { common } from '@mui/material/colors';
import { Roboto } from 'next/font/google';

const htmlFontSize = 16;
const fontSize = 16;
const fontSizeCoefficient = fontSize / htmlFontSize;
const pxToRem = (size: number) =>
  `${(size / htmlFontSize) * fontSizeCoefficient}rem`;

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#7820BC',
      contrastText: '#6B7280',
    },
    secondary: {
      main: '#19857b',
      contrastText: '#666666',
      dark: '#0070F3',
    },
    divider: '#E4E4E7',
    error: {
      main: red.A400,
    },
    success: {
      main: '#067A6E',
      light: '#D4F7F0',
    },
    text: {
      primary: common.black,
      secondary: 'rgba(38, 38, 38, 0.4)',
      disabled: 'rgba(0.035, 0.035, 0.043, 0.6)',
    },
    background: {
      paper: '#F7F7F8',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: pxToRem(40),
      lineHeight: 1.2,
      fontWeight: 600,
    },
    h2: {
      fontSize: pxToRem(32),
      lineHeight: 1,
    },
    h3: {
      fontSize: pxToRem(24),
      lineHeight: 1.33,
    },
    h4: {
      fontSize: pxToRem(16),
      lineHeight: 1.5,
    },
    body1: {
      fontSize: pxToRem(14),
      lineHeight: 1.2,
    },
    body2: {
      fontSize: pxToRem(13),
      lineHeight: 1.2,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
