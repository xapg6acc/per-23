import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { ApiError, Post } from '@types';

import { createPost, getPostList, deletePost, updatePost } from '../api';

export const useCreatePost = (options: UseMutationOptions<Post, ApiError, Post> = {}) => {
  return useMutation<Post, ApiError, Post>(data => createPost(data), options);
};

export const useGetPostList = (options: UseQueryOptions<Post[], ApiError> = {}) => {
  return useQuery<Post[], ApiError>(['post-list'], () => getPostList(), { ...options, cacheTime: 0, staleTime: 0 });
};

export const useDeletePost = (options: UseMutationOptions<{ id: number }, ApiError, { id: number }> = {}) => {
  return useMutation<{ id: number }, ApiError, { id: number }>(({ id }) => deletePost(id), options);
};

export const useUpdatePost = (options: UseMutationOptions<Post, ApiError, Post> = {}) => {
  return useMutation<Post, ApiError, Post>(data => updatePost(data), options);
};
