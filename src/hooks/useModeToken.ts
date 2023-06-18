import { useMemo } from 'react';
import { createTheme, PaletteMode } from '@mui/material';
import { deepPurple, indigo, orange } from '@mui/material/colors';

import { ThemeMode } from '@app/constants/theme';
import { theme, transparentColor, appConfig } from '@app/config';

export const useModeToken = (mode: PaletteMode) => {
  const { light, dark } = useMemo(() => {
    const light = {
      primary: {
        main: transparentColor(deepPurple[900]),
      },
      secondary: {
        main: transparentColor(deepPurple[600], '1'),
        contrast: transparentColor(orange[800]),
      },
      background: {
        default: transparentColor('#FFF', '0.1'),
        paper: transparentColor(indigo[100]),
      },
    };

    const dark = {
      primary: {
        main: transparentColor(indigo[200], '1'),
      },
      secondary: {
        main: transparentColor(indigo[600], 1),
        contrast: transparentColor(indigo[800]),
      },
      background: {
        default: transparentColor('#092a57', 1),
        paper: transparentColor('#092A57'),
      },
    };

    return { light, dark };
  }, []);

  const customMode = useMemo(
    () => ({
      ...theme,
      palette: {
        mode,
        ...(mode === ThemeMode.Light
          ? {
              primary: {
                main: light.primary.main,
              },
              background: {
                default: light.background.default,
                paper: light.background.paper,
              },
              secondary: {
                main: dark.secondary.main,
                contrastText: dark.secondary.contrast,
              },
            }
          : {
              primary: {
                main: dark.primary.main,
              },
              background: {
                default: dark.background.default,
                paper: dark.background.paper,
              },
              secondary: {
                main: light.secondary.main,
                contrastText: light.secondary.contrast,
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
    }),
    [mode, light, dark],
  );

  return createTheme(customMode);
};
