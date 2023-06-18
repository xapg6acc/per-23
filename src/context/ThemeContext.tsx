import { createContext } from 'react';
import { PaletteMode } from '@mui/material';

import { ThemeMode } from '@app/constants/theme';

export interface ThemeContextProps {
  readonly mode: PaletteMode;
  readonly setMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
