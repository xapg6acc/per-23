import deepEqual from 'fast-deep-equal';
import { ReactNode, useCallback, useEffect, useState } from 'react';

import { Currency, Language } from '../constants';
import { applicationOrderStorage } from '../utils';
import { ApplicationOrdersContext } from '../context';
import { ApplicationState } from '../types/application';

export interface ApplicationOrdersProviderProps {
  readonly children?: ReactNode;
}

const initialState: ApplicationState = {
  socket: 0,
  order: [],
  language: Language.EN,
  currency: Currency.UAH,
};

export const ApplicationOrdersProvider = ({ children }: ApplicationOrdersProviderProps) => {
  const [state, setState] = useState<ApplicationState>(applicationOrderStorage.get() || initialState);

  const handleSetState = useCallback(
    (newState: ApplicationState) => {
      if (!deepEqual(newState, state)) {
        setState(newState);

        if (newState) {
          applicationOrderStorage.set(newState);
        } else {
          applicationOrderStorage.clear();
        }
      }
    },
    [state],
  );

  useEffect(() => {
    if (!state) {
      handleSetState(initialState);
    }
  }, []);

  return (
    <ApplicationOrdersContext.Provider value={{ state, setState: handleSetState }}>
      {children}
    </ApplicationOrdersContext.Provider>
  );
};
