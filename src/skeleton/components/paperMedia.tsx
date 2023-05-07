import { ReactNode } from 'react';
import { CardMedia, Skeleton, CardMediaProps } from '@mui/material';

export interface PaperMediaProps extends CardMediaProps {
  readonly isLoading?: boolean;
  readonly children?: ReactNode;
}

export const PaperMedia = ({ children, isLoading, ...props }: PaperMediaProps) => {
  return (
    <CardMedia {...props}>
      {isLoading ? <Skeleton animation="wave" /> : children}
    </CardMedia>
  );
};
