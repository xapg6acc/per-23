import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { appWithTranslation } from 'next-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { QueryProvider } from '@app/old/api';
import { Home } from '@app/ui/button/components/Home';
import { ApplicationOrdersProvider } from '@app/orders-application/components/ApplicationOrdersProvider';
import { ApplicationProvider as PhoneCatalogApplicationProvider } from '@app/phone-catalog/components/ApplicationProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:type" content="website" />
      </Head>
      <SnackbarProvider maxSnack={5}>
        <QueryProvider>
          <PhoneCatalogApplicationProvider>
            <ApplicationOrdersProvider>
              <CssBaseline />
              <Component {...pageProps} />
              <Home />
            </ApplicationOrdersProvider>
          </PhoneCatalogApplicationProvider>
        </QueryProvider>
      </SnackbarProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
