import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getMonoCurrency } from '../api';
import { Currency } from '../types/currency';

export const useGetMonoCurrency = (options: UseQueryOptions<Currency[]> = {}) => {
  return useQuery<Currency[]>(['mono-currency'], getMonoCurrency, { ...options, staleTime: 300000, cacheTime: 300000 });
};
