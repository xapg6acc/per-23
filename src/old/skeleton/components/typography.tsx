import { ReactNode } from 'react';
import { Collapse, Typography as MuiTypography, TypographyProps, Skeleton } from '@mui/material';

export interface MuiTypographyProps extends TypographyProps {
  readonly isLoading?: boolean;
  readonly children?: ReactNode;
}

export const Typography = ({ isLoading = false, children, ...props }: MuiTypographyProps) => {
  return (
    <MuiTypography {...props} width={1} display="inline-flex" sx={{ '*': { minWidth: 1 } }}>
      <Collapse unmountOnExit in={isLoading} orientation="horizontal" sx={{ width: 1 }}>
        <Skeleton animation="wave" width="100%" />
      </Collapse>
      <Collapse mountOnEnter in={!isLoading} orientation="horizontal">
        {children}
      </Collapse>
    </MuiTypography>
  );
};
