import {createContext, SyntheticEvent, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import { PaletteMode, useMediaQuery } from '@mui/material';
import { produce } from 'immer';

import { ThemeMode } from '@app/constants/theme';

export interface ModeContextProps {
  readonly mode?: PaletteMode;
  readonly setMode: (mode: ThemeMode) => void;
}

export const ModeContext = createContext<ModeContextProps>({} as ModeContextProps);

export const useMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // console.log('prefersDarkMode', prefersDarkMode)
  // const { mode: state, setMode } = useContext(ModeContext);
  // const [themeMode, setThemeMode] = useState<ThemeMode>(prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light);

  const mode = useMemo(() => {
    const preferredMode = prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light;

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('color-scheme', preferredMode);
    }

    return preferredMode;
  }, [prefersDarkMode]) as PaletteMode;

  // console.log('mode -> mode', mode);

  // const handleMode = useCallback(() => {
  //   console.log('click')
  //   // updateMode(prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light);
  // }, []);

  // const handleMode = useCallback(async (event: SyntheticEvent) => {
  //   console.log('event', event)
  //   const res = prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light;
  //   if (prefersDarkMode) {
  //     console.log('prefers', prefersDarkMode);
  //     await setThemeMode(res);
  //   }
  //   // setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  //   if (mode === ThemeMode.Dark) {
  //     console.log('if (mode === ThemeMode.Dark)');
  //     return setThemeMode(ThemeMode.Light);
  //   }
  //   if (mode === ThemeMode.Light) {
  //     console.log('if (mode === ThemeMode.Light)');
  //     return setThemeMode(ThemeMode.Dark);
  //   }
  //
  //   // setMode((prevMode: ThemeMode) => (prevMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light));
  // }, [mode, prefersDarkMode]);

  // const theme = useCallback(
  //   produce(baseTheme => {
  //     if (prefersDarkMode) {
  //       baseTheme.palette.type = 'dark';
  //       // baseTheme.palette.primary.main = '#90caf9';
  //     } else {
  //       baseTheme.palette.type = 'light';
  //       // baseTheme.palette.primary.main = '#1976d2';
  //     }
  //   }),
  //   [],
  // );

  // useEffect(() => {
  //   setMode(themeMode);
  // }, [themeMode, prefersDarkMode]);

  return { mode };
};

// import React, { useState, useCallback } from 'react';
// import produce from 'immer';

// type ThemeContextType = {
//   themeMode: string;
//   toggleThemeMode: () => void;
// };
//
// export const ThemeContext = createContext<ThemeContextType>({
//   themeMode: 'light',
//   toggleThemeMode: () => {},
// });
//
// const MyApp = () => {
//   const [themeMode, setThemeMode] = useState<string>('light');
//
//   const toggleThemeMode = useCallback(() => {
//     setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//   }, []);
//
//   const theme = useCallback(
//     produce((baseTheme) => {
//       if (themeMode === 'dark') {
//         baseTheme.palette.type = 'dark';
//         baseTheme.palette.primary.main = '#90caf9';
//       } else {
//         baseTheme.palette.type = 'light';
//         baseTheme.palette.primary.main = '#1976d2';
//       }
//     }),
//     [themeMode]
//   );
//
//   return (
//     <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
//       <ThemeProvider theme={createTheme(theme)}>
//         {/* Your app components */}
//       </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };
//
// export default MyApp;
