import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { theme } from '@app/home-page/configs/theme';
import { MainPage } from '@app/home-page/components/main/MainPage';
import image from '@app/home-page/images/ua-flag.png';

const Main: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Main Page</title>
        <meta property="og:title" content="Ivan Boiko draft" />
        <meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <meta property="og:image" content={image.src} />
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
