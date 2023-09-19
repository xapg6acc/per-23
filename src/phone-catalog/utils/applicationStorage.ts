import { State } from '../types';
import { localStorageItem } from '../constants';

export const set = (state: State) => {
  localStorage.setItem(localStorageItem, JSON.stringify(state));
};

export const get = () => {
  if (typeof localStorage === 'undefined') {
    return undefined;
  }

  const data = localStorage.getItem(localStorageItem);

  if (data) {
    try {
      return JSON.parse(data) as State;
    } catch (e) {
      console.log(`🌚`);
    }
  }

  return undefined;
};

export const clear = () => {
  localStorage.removeItem(localStorageItem);
};

export const applicationStorage = {
  set,
  get,
  clear,
};
