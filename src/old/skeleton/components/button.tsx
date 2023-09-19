import { ReactNode } from 'react';
import { Skeleton } from '@mui/material';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';

export interface ButtonProps extends LoadingButtonProps {
  readonly children?: ReactNode;
  readonly isLoading?: boolean;
}

export const Button = ({ children, isLoading = false, ...props }: ButtonProps) => {
  return (
    <LoadingButton loadingIndicator={<Skeleton width={50} animation="wave" />} {...props}>
      {children}
    </LoadingButton>
  );
};
