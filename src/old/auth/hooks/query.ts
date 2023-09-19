import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { ApiError, User, Post } from '@app/old/types';

import { signup } from '../api';

export const useSignUp = (options: UseMutationOptions<User, ApiError, User> = {}) => {
  return useMutation<User, ApiError, User>(data => signup(data), options);
};

export const useForgotPassword = () => {};
