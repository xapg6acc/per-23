import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, Box, CircularProgress, Backdrop } from '@mui/material';

import { appConfig } from '@app/old/config';

// import { CatalogHeader } from './header';
import { theme } from '../../configs/theme';
import { ApplicationProvider } from '../ApplicationProvider';

const CatalogHeader = dynamic(() => import('./header').then(page => page.CatalogHeader), { ssr: false });
// const ApplicationProvider = dynamic(() => import('../ApplicationProvider').then(page => page.ApplicationProvider), {
//   ssr: false,
// });

interface LayoutPageProps {
  readonly children: ReactNode;
}

export const CatalogLayoutPage = ({ children }: LayoutPageProps) => {
  // console.log(appConfig.isServer);

  return (
    <ThemeProvider theme={theme}>
      {/*<ApplicationProvider>*/}
      <CatalogHeader />
      <Box pt={9} maxWidth={1200} mx="auto">
        {children}
      </Box>
      {/*</ApplicationProvider>*/}
    </ThemeProvider>
  );
};
