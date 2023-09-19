import { AxiosRequestConfig } from 'axios';

import { client } from '@app/old/api';
import { User, Post } from '@app/old/types';

export const signup = async (data: User, options: AxiosRequestConfig = {}): Promise<User> => {
  return await client.post('/api/register', data, options);
};

// after migrate new user model
export const forgotPassword = async (data: Partial<User>, options: AxiosRequestConfig = {}): Promise<Partial<User>> => {
  return await client.post('/api/forgot-password', data, options);
};
