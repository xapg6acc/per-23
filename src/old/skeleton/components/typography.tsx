import { ReactNode } from 'react';
import { Typography as MuiTypography, TypographyProps, Skeleton } from '@mui/material';

export interface MuiTypographyProps extends TypographyProps {
  readonly isLoading?: boolean;
  readonly children?: ReactNode;
}

export const Typography = ({ isLoading = false, children, ...props }: MuiTypographyProps) => {
  return <MuiTypography {...props} minWidth={1}>{isLoading ? <Skeleton animation="wave" width="100%" /> : children}</MuiTypography>;
};
