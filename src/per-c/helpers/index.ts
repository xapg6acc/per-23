import { ReactNode } from 'react';

export const getClonedItems = (items: (string | number | ReactNode)[], copyTimes = 1): (string | number)[] => {
  return Array(copyTimes).fill(items).flat();
};

export const formatCurrency = (format: number | string, currency?: string) => {
  return Intl.NumberFormat('de-DE', { style: 'currency', currency: currency || 'UAH' }).format(format as number);
};
