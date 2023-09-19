import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

// import BoldMont from '../fonts/Mont-Bold.otf';
// import RegularBold from '../fonts/Mont-Regular.otf';
// import SemiBold from '../fonts/Mont-SemiBold.otf';

const breakpoints = createBreakpoints({});

const palette = {
  primary: {
    main: '#B4BDC3',
  },
  secondary: {
    main: '#313237',
  },
  common: {
    white: '#FFFFFF',
    black: '#313237',
  },
  grey: {
    50: '#89939A',
    100: '#E2E6E9',
    200: '#FAFBFC',
  },
  error: {
    main: '#EB5757',
  },
  green: {
    50: '#27AE60',
  },
};

const typography = {
  // fontFamily: 'Montserrat, sans-serif',
  fontFamily: 'Mont-Bold, Mont-SemiBold, Mont-Regular, Mont, Montserrat, sans-serif',
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
    // MuiFormLabel: {
    //   styleOverrides: {
    //     root: {
    //       // width: 1,
    //       backgroundColor: 'white',
    //       borderRadius: 5,
    //     },
    //   },
    // },  sx={{ '.MuiTextField-root': { width: 1 } }}
    MuiButton: {
      styleOverrides: {
        root: {
          color: palette.secondary.main,
          borderRadius: 0,
          padding: 0,
        },
        outlined: {
          color: palette.green[50],
          borderColor: palette.primary.main,
          minWidth: 32,
          textTransform: 'initial',
        },
        contained: {
          borderRadius: 0,
          lineHeight: 1.429,
          padding: '10px 20px',
          textTransform: 'initial',
          color: palette.common.white,
          backgroundColor: palette.common.black,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          display: 'none',
        },
        root: {
          width: 300,
          borderRadius: 0,
          borderLeft: `1px solid ${palette.grey[100]}`,
          fontSize: 14,
          fontWeight: 600,
          height: '100%',
          color: palette.common.black,
          '::placeholder': {
            color: palette.primary.main,
          },
          ':focus': {
            backgroundColor: palette.grey[200],
          },
        },
      },
    },
    // MuiCssBaseline: {
    //   '@global': {
    //     '@font-face': [
    //       {
    //         fontFamily: 'Mont-Bold',
    //         src: `url(${BoldMont})`,
    //       },
    //       {
    //         fontFamily: 'Mont-Regular',
    //         src: `url(${RegularBold})`,
    //       },
    //       {
    //         fontFamily: 'Mont-SemiBold',
    //         src: `url(${SemiBold})`,
    //       },
    //     ],
    //   },
    // },
  },
});

// declare module '@mui/material/styles' {
//   interface Palette {
//     custom: SimplePaletteColorOptions;
//   }
//   interface PaletteOptions {
//     custom: PaletteOptions['primary'];
//   }
// }
