import { ReactNode } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { QueryClient, QueryOptions } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import test from '@app/api/test.json';
import teachers from './teacher.json';

// Object.entries(teachers).map((key, value) => {
//   console.log(key)
// })

// export const appConfig = {
//   reddit: {
//     api: process.env.REDDIT_API || '',
//   },
// };

export const queryClient = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: false,
      retry: false,
    },
  },
};

export const getInitialQueryClient = () => new QueryClient(queryClient);

const clients = getInitialQueryClient();

export interface QueryProviderProps {
  readonly children: ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => (
  <QueryClientProvider client={clients}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export const client = axios.create({
  responseType: 'json',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

client.interceptors.response.use(
  response => {
    if (response?.data) {
      if (typeof response?.data?.data === 'object' && Object.keys(response?.data).length === 1) {
        return response?.data?.data;
      }

      return response?.data;
    }

    return response;
  },
  error => {
    const result: Record<string, any> = {
      status: error.response?.status,
      statusText: error.response?.statusText,
    };

    if (result.status === 422 && error?.response?.data?.errors) {
      result.data = {};

      return Promise.reject(
        Object.entries(error.response.data.errors).reduce((draft, [field, error]) => {
          if (Array.isArray(error)) {
            draft.data[field] = error[0];
          }

          return draft;
        }, result),
      );
    }

    result.data = error?.response?.data;

    return Promise.reject(result);
  },
);

client.interceptors.response.use(response => {
  // console.log('client.interceptors.response.use(', response, ')')

  return response;
});

// export const getTest = async (options: AxiosRequestConfig = {}): Promise<any> => {
//   const result = await client.get(process.env.REDDIT_API + '/me', options);
//
//   console.log('result', process.env.REDDIT_API, result);
//
//   return result;
// };

// export const useGetTest = (options: QueryOptions<any, any> = {}) => {
//   return useQuery<any, any>(['test'], getTest, options);
// };

// export const testTheme = async (options: AxiosRequestConfig = {}) => {
//   return await axios.get(teachers, options);
// };

// export const useTestTheme = (options: UseQueryOptions<Record<any, any>, ApiError> = {}) => {
//   return useQuery<Record<any, any>, ApiError>(['theme'], testTheme, options);
// };
