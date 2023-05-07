import { useMemo } from 'react';

export const useTransparentColor = (hex: string, alpha: string | number | undefined = '0.7'): string => {
  return useMemo(() => {
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }, [hex, alpha]);
};
