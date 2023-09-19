import { createContext } from 'react';

import { ApplicationState } from '../types/application';

export interface ApplicationOrdersContextProps {
  state: ApplicationState;
  setState: (state: ApplicationState) => void;
}

export const ApplicationOrdersContext = createContext<ApplicationOrdersContextProps>(
  {} as ApplicationOrdersContextProps,
);
