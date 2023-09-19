import { createTheme, Color } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const palette = {
  primary: {
    main: '#505A64',
  },
  secondary: {
    main: '#282828',
  },
  common: {
    white: '#FFFFFF',
    black: '#313237',
  },
  grey: {
    50: '#F0F0F0',
    100: '#E2E6E9',
    200: '#FAFBFC',
    300: '#282828',
    400: '#C8C8C8',
  },
  error: {
    main: '#EB5757',
  },
  green: {
    50: '#C3D72D',
    100: '#7AA839',
    200: '#649637',
    300: '#BEDC14',
  },
};

const typography = {
  fontFamily: 'Montserrat, sans-serif',
  lineHeight: 1,
  h1: {
    fontWeight: 700,
    fontSize: 32,
    // lineHeight: '41px',
    letterSpacing: '-0.01em',
  },
  h2: {
    fontWeight: 800,
    fontSize: 22,
    // lineHeight: '31px',
  },
  h3: {
    fontWeight: 600,
    fontSize: 20,
    // lineHeight: '26px',
  },
  h4: {
    fontWeight: 700,
    fontSize: 12,
    // lineHeight: '11px',
    letterSpacing: '0.04em',
    textDecoration: 'none',
  },
  h5: {
    fontWeight: 600,
    fontSize: 14,
    // lineHeight: '21px',
    color: palette.secondary.main,
  },
  h6: {
    fontWeight: 500,
    fontSize: 20,
    // lineHeight: '26px',
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: 12,
    // lineHeight: '15px',
  },
  body1: {
    fontWeight: 500,
    fontSize: 14,
    // lineHeight: '21px',
  },
};

export const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: palette.common.white,
          },
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    green: Color;
  }
  interface PaletteOptions {
    green: PaletteOptions['primary'];
  }
}
