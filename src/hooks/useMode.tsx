import { produce } from 'immer';
import { PaletteMode } from '@mui/material';
import { createContext, useCallback, useContext } from 'react';

import { ThemeMode } from '@app/constants/theme';
import { ThemeContext } from '@app/context';

export interface ModeContextProps {
  readonly mode?: PaletteMode;
  readonly setMode: (mode: any) => void;
}

export const ModeContext = createContext<ModeContextProps>({} as ModeContextProps);

export const useThemeMode = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const toggleMode = useCallback(
    (state: PaletteMode) => {
      if (mode) {
        setMode(
          // @ts-ignore
          produce(draft => {
            // @ts-ignore
            draft.mode = state;
          }),
        );
      }
    },
    [mode],
  );

  return { toggleMode, mode };
};
