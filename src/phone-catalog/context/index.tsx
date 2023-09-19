import { createContext } from 'react';

import { State } from '../types';

export interface ApplicationContextProps {
  readonly state: State;
  readonly setState: (state: State) => void;
}

export const ApplicationContext = createContext<ApplicationContextProps>({} as ApplicationContextProps);
