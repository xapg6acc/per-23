import { ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';

interface PageLayoutProps extends BoxProps {
  readonly children: ReactNode;
}

export const PageLayout = ({ children, ...props }: PageLayoutProps) => {
  return (
    <Box py={5} maxWidth={1200} minHeight="100vh" mx="auto" {...props}>
      {children}
    </Box>
  );
};
