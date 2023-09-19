import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Product, Order } from '../types';
import { getProducts, getOrders } from '../api';

export const useGetProducts = (options: UseQueryOptions<Product[], unknown, Product[]> = {}) => {
  return useQuery<Product[], unknown, Product[]>(['orders-application-products'], getProducts, options);
};

export const useGetOrders = (options: UseQueryOptions<Order[], unknown, Order[]> = {}) => {
  return useQuery<Order[], unknown, Order[]>(['orders-application-orders'], getOrders, { ...options, cacheTime: 100000, staleTime: 100000 });
};
