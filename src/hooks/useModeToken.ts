import { createTheme, PaletteMode } from '@mui/material';
import { deepPurple, indigo, orange } from '@mui/material/colors';

import {  } from '@app/api';
import { theme } from '@app/config/theme';
import { useTransparentColor } from '@app/hooks/useTransparentColor';

export const useModeToken = (mode: PaletteMode) => {
  const darkColor = useTransparentColor(indigo[200], '1');
  const lightColor = useTransparentColor(deepPurple[900]);
  const lightDefaultPaper = useTransparentColor(indigo[50]);
  const darkDefaultPaper = useTransparentColor('#092A57');
  const lightDefault = useTransparentColor('#FFF', '0.1');
  const darkDefault = useTransparentColor('#092a57', 1);
  const darkSecondaryMain = useTransparentColor(indigo[600], 1);
  const lightSecondaryMain = useTransparentColor(deepPurple[600], '1');
  const darkSecondaryContrast = useTransparentColor(indigo[800]);
  const lightSecondaryContrast = useTransparentColor(orange[800]);
  // const x = useTestTheme();
  // console.log(x);

  // console.log('dark color:', darkColor);
  // console.log('deep purple color:', lightColor);

  const customMode = {
    ...theme,
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: lightColor,
              light: '',
            },
            background: {
              default: lightDefault,
              paper: lightDefaultPaper,
            },
            secondary: {
              main: darkSecondaryMain,
              contrastText: darkSecondaryContrast,
            },
          }
        : {
            primary: {
              main: darkColor,
            },
            background: {
              default: darkDefault,
              paper: darkDefaultPaper,
            },
            secondary: {
              main: lightSecondaryMain,
              contrastText: lightSecondaryContrast,
            },
          }),
    },
    // component: {
    //   MuiTypography: {
    //     styleOverrides: {
    //       root: {
    //         '::selection': {
    //           color: darkDefault,
    //         },
    //       },
    //     },
    //   },
    // },
  };

  return createTheme(customMode);
};
