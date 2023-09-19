import { ReactNode } from 'react';
import { Box } from '@mui/material';

import { Typography } from '@app/old/skeleton';

export interface SectionProps {
  readonly title: string;
  readonly children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <Box>{children}</Box>
    </>
  );
};
