import { AxiosRequestConfig } from 'axios';

import { client } from '@app/old/api';

import { ResumeData } from '../types';
import { CodeWarsUser } from '../types/codeWars';

export const resumeData = async (options: AxiosRequestConfig = {}): Promise<ResumeData> => {
  return await client.get('/api/resume', options);
};

export const getCodeWarsData = async (options: AxiosRequestConfig = {}): Promise<CodeWarsUser> => {
  return await client.get('https://www.codewars.com/api/v1/users/Xapg', options);
};
