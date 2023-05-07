import { createTheme } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

// const palette = {
//   primary: {
//     main: 'rgb(50, 50, 50)',
//     // light: '',
//     dark: '#ff0000',
//   },
//   secondary: {
//     main: 'rgb(60, 60, 50)',
//     // light: '',
//     dark: '#ff0000',
//   },
//   // transparent: {
//   //   main: 'rgba(10, 25, 41, 0.7)',
//   //   primary: '',
//   // },
//   backgroundColor:{
//     // default: 'rgba(10, 25, 41, 0.7)',
//     default: '#F00',
//   },
// };

const typography = {
  fontFamily: 'Helvetica Neue, sans-serif;',
  h1: {
    // fontSize: 24,
    fontWeight: 700,
    // [breakpoints.up('md')]: {
    //   fontSize: 44,
    // },
  },
  h2: {
    fontWeight: 700,
  },
  h3: {
    fontWeight: 600,
  },
  h4: {
    fontWeight: 600,
  },
  h5: {
    fontWeight: 400,
    fontSize: 12,
    [breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  h6: {
    fontSize: 12,
    fontWeight: 400,
  },
};

export const theme = createTheme({
  // palette,
  typography,
  breakpoints,
  components: {
    // MuiLoadingButton: {
    //   defaultProps: {
    //     loadingIndicator: <CircularProgress color="primary" size={24} />,
    //   },
    // },
    MuiTypography: {
      styleOverrides: {
        root: {
          '::selection': {
            color: indigo.A100,
            backgroundColor: indigo["500"]
          },
        },
      },
    },
  },
});

// declare module '@mui/material/styles' {
//   interface Palette {
//     transparent: SimplePaletteColorOptions;
//   }
//   interface PaletteOptions {
//     transparent: PaletteOptions['primary'];
//   }
// }
