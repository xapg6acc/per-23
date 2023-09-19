import { AxiosRequestConfig } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { client } from '@app/old/api';

import { Phone, PhoneDetailed, PhoneListParams } from '../types';

const BASE_URL = 'https://mate-academy.github.io/react_phone-catalog/_new/products';

export const getPhones = async (options: AxiosRequestConfig = {}): Promise<Phone[]> => {
  return await client.get(`${BASE_URL}.json`, options);

  // if (!params) {
  //   return fetch;
  // }
  //
  // const result = fetch.sort((a, b) => {
  //   switch (params?.sortBy) {
  //     case 'new':
  //       return b.year - a.year;
  //     case 'old':
  //       return a.year - b.year;
  //     case 'asc':
  //       return a.name.localeCompare(b.name);
  //     case 'desc':
  //       return b.name.localeCompare(a.name);
  //     default:
  //       console.log('🌚️️');
  //   }
  // });
  //
  // // console.log(result);
  //
  // return result.reduce(
  //   (acc, item) => {
  //     if (params.perPage === 'all') {
  //       // console.log('params', params);
  //       acc.push(item);
  //     } else if (acc[acc.length - 1].length === params?.perPage) {
  //       acc.push([item]);
  //     } else {
  //       acc[acc.length - 1].push(item);
  //     }
  //
  //     return acc;
  //   },
  //   params.perPage === 'all' || !params ? ([] as Phone[]) : ([[]] as Phone[][]),
  // );
};

export const useGetPhones = (options: UseQueryOptions<Phone[], unknown, Phone[]> = {}) => {
  return useQuery<Phone[], unknown, Phone[]>(['phones'], () => getPhones(), options);
};

export const getPhone = async (slug: string, options: AxiosRequestConfig = {}): Promise<PhoneDetailed> => {
  return client.get(`${BASE_URL}/${slug}.json`, options);
};

export const useGetPhone = (slug: string, options: UseQueryOptions<PhoneDetailed, unknown, PhoneDetailed> = {}) => {
  return useQuery<PhoneDetailed, unknown, PhoneDetailed>(['phone', slug], () => getPhone(slug), options);
};
