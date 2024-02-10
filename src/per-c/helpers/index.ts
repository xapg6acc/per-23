import { ReactNode } from 'react';

export const getClonedItems = (items: (string | number | ReactNode)[], copyTimes = 1): (string | number)[] => {
  return Array(copyTimes).fill(items).flat();
};
