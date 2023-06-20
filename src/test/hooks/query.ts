import { useQuery, QueryOptions } from '@tanstack/react-query';

import { ApiError } from '@types';

import { DummyData } from '../types';
import { getDummyComments } from '../api';

export const useGetDummyComments = (options: QueryOptions<DummyData, ApiError, DummyData> = {}) => {
  return useQuery<DummyData, ApiError, DummyData>(['dummy-comments'], getDummyComments, options);
};
