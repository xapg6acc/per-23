import { AxiosRequestConfig } from 'axios';

import { client } from '@app/old/api';

import { Currency } from '../types/currency';

export const getMonoCurrency = (options: AxiosRequestConfig = {}): Promise<Currency[]> => {
  return client.get('https://api.monobank.ua/bank/currency', options);
};
