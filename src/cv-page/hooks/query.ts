import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { ApiError } from '@app/old/types';

import { resumeData, getCodeWarsData } from '../api';
import { ResumeData } from '../types';
import { CodeWarsUser } from '../types/codeWars';

export const useResumeData = (options: UseQueryOptions<ResumeData, ApiError> = {}) => {
  return useQuery<ResumeData, ApiError>(['resume'], resumeData, options);
};

export const useGetCodeWarsData = (options: UseQueryOptions<CodeWarsUser, ApiError> = {}) => {
  return useQuery<CodeWarsUser, ApiError>(['code-wars'], getCodeWarsData, options);
};
