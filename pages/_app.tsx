import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { ModalProvider } from 'react-modal-hook';
import { appWithTranslation } from 'next-i18next';

import { Layout } from '@app/layout';
import { QueryProvider } from '@app/api';
import { ThemeProvider as CustomThemeProvider } from '@app/context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // console.log(contextMode, mode, themeMode);
  // console.log('theme', {
  //   mode: customTheme?.palette.mode,
  //   primary: customTheme.palette.primary,
  //   secondary: customTheme.palette.secondary,
  //   background: customTheme.palette.background,
  // });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:type" content="website" />
      </Head>
      <SnackbarProvider maxSnack={5}>
        <QueryProvider>
          <CustomThemeProvider>
            <CssBaseline />
            <ModalProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ModalProvider>
          </CustomThemeProvider>
        </QueryProvider>
      </SnackbarProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
