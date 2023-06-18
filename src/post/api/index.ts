import { AxiosRequestConfig } from "axios";

import { Post } from '@types';
import { client } from '@app/api';
import { toNumber } from '@app/utils';

export const createPost = async (data: Post, options: AxiosRequestConfig = {}): Promise<Post> => {
  return await client.post('/api/posts/create', data, options);
};

export const getPost = async ({ id }: Post, options: AxiosRequestConfig = {}): Promise<Post> => {
  return await client.get(`/api/posts/${id}`, options);
};

export const getPostList = async (options: AxiosRequestConfig = {}): Promise<Post[]> => {
  return await client.get('/api/posts', options);
};

export const deletePost = async (id: number, options: AxiosRequestConfig = {}): Promise<{ id: number }> => {
  return toNumber(await client.delete(`/api/posts/delete/${id}`, options));
};

export const updatePost = async ({ id, ...data }: Post, options: AxiosRequestConfig = {}): Promise<Post> => {
  return await client.patch(`/api/posts/update/${id}`, data, options);
};
