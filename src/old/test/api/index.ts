import { AxiosRequestConfig } from 'axios';

import { client } from '@app/old/api';

import { DummyData } from '../types';

export const getDummyComments = (options: AxiosRequestConfig = {}): Promise<DummyData> => {
  return client.get('https://dummyjson.com/comments', options);
};
