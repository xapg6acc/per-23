import { prefersColorScheme, ThemeMode } from '@app/constants/theme';

export const set = (mode: ThemeMode) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(prefersColorScheme, mode);
  }
};

export const get = () => {
  if (typeof localStorage !== 'undefined') {
    const getMode = localStorage.getItem(prefersColorScheme);

    if (getMode) {
      try {
        return getMode;
      } catch (e) {
        console.warn('localStorage-mode error:', e);
      }
    }

    return undefined;
  }

  return undefined;
};

export const clear = () => {
  localStorage.removeItem(prefersColorScheme);
};

export const themeStorage = {
  get,
  set,
  clear,
};
