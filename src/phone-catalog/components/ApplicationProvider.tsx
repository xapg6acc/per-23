import deepEqual from 'fast-deep-equal';
import { useQueryClient } from '@tanstack/react-query';
import { ReactNode, useCallback, useEffect, useState } from 'react';

import { State } from '../types';
import { ApplicationContext } from '../context';
import { applicationStorage } from '../utils/applicationStorage';

interface ApplicationProviderProps {
  readonly children?: ReactNode;
}

const initialState: State = {
  cart: [],
  favorite: [],
};

export const ApplicationProvider = ({ children }: ApplicationProviderProps) => {
  const [state, setState] = useState<State>(applicationStorage.get() || initialState);
  const queryClient = useQueryClient();

  const handleSetState = useCallback(
    (newState: State) => {
      if (!deepEqual(newState, state)) {
        setState(newState);

        if (newState) {
          applicationStorage.set(newState);
        } else {
          applicationStorage.clear();
        }
      }
    },
    [state],
  );

  useEffect(() => {
    if (state) {
      queryClient.setQueryData(['application'], state);
    }

    if (!state) {
      handleSetState(initialState);
      queryClient.setQueryData(['application'], initialState);
    }
  }, []);

  return (
    <ApplicationContext.Provider value={{ state, setState: handleSetState }}>
      {children}
    </ApplicationContext.Provider>
  );
};
