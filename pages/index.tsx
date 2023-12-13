import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { theme } from '@app/home-page/configs/theme';
import { MainPage } from '@app/home-page/components/main/MainPage';

const Main: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Main Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainPage />
      </main>
    </ThemeProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default Main;
