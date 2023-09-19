import { useMemo } from 'react';

export const useGetInitials = (name: string) => {
  return useMemo(() => {
    const result = name.trim().split(' ');

    if (result.length > 1) {
      const [firstName, lastName] = result;
      return firstName[0].toUpperCase() + lastName[0].toUpperCase();
    }

    if (result.length === 1 && result[0].length > 0) {
      return result[0][0].toUpperCase();
    }

    return name;
  }, [name]);
};
