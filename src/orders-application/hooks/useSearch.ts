import { useState } from 'react';
import { useRouter } from 'next/router';

import { Order, Product } from '../types';

export const useSearch = () => {
  const { query } = useRouter();
  const [searchValue, setSearchValue] = useState<string>((query?.search as string) || '');

  const includes = (data: Order | Product, value: string) =>
    Object.values(data)
      .filter(
        item => (typeof item === 'string' || typeof item === 'number') && String(item).toLowerCase().includes(value),
      )
      .some(Boolean);

  return { includes, searchValue, setSearchValue };
};
