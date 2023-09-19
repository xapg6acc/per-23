import { AxiosRequestConfig } from 'axios';

import { client } from '@app/old/api';

import { Order, Product } from '../types';

export const getProducts = async (options: AxiosRequestConfig = {}): Promise<Product[]> => {
  return await client.get('/api/orders-application/products', options);
};

export const getOrders = async (options: AxiosRequestConfig = {}): Promise<Order[]> => {
  return await client.get('/api/orders-application/orders', options);
};
