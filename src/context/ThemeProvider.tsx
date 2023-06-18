import { produce } from 'immer';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useMediaQuery, ThemeProvider as MuiThemeProvider } from '@mui/material';

import { ThemeMode } from '@app/constants/theme';

import { themeStorage } from './themeStorage';
import { ThemeContext } from './ThemeContext';
import { useModeToken } from '@app/hooks';

export interface ThemeProviderProps {
  readonly children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setLocalMode] = useState<ThemeMode>(() => {
    const themeMode = themeStorage.get();
    return themeMode === ThemeMode.Dark ? ThemeMode.Dark : ThemeMode.Light;
  });
  const customTheme = useModeToken(mode);

  const setMode = useCallback(() => {
    setLocalMode(currentMode => {
      return produce(currentMode, draft => {
        // if (prefersDarkMode && draft !== ThemeMode.Light) {
        //   console.log('here first if');
        // return prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light;
        // }

        if (draft === ThemeMode.Dark) {
          return ThemeMode.Light;
        }

        if (draft === ThemeMode.Light) {
          return ThemeMode.Dark;
        }
      });
    });
  }, [mode]);

  // useEffect(() => {
  //   setMode();
  // }, []);

  useEffect(() => {
    themeStorage.set(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MuiThemeProvider theme={customTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
