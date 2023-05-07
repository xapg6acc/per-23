import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ModalProvider } from 'react-modal-hook';
import { appWithTranslation } from 'next-i18next';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Layout } from '@app/layout';
import { QueryProvider } from '@app/api';
import { useMode, useModeToken } from '@app/hooks';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { mode } = useMode();
  const customTheme = useModeToken(mode);
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
      <QueryProvider>
        <ThemeProvider theme={customTheme}>
          <ModalProvider>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ModalProvider>
        </ThemeProvider>
      </QueryProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
