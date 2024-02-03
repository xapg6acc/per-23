import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CvPage as Cv } from '@app/cv-page/components/cv';
import photoIvanBoiko from '@app/cv-page/images/photoIvanBoiko.jpg';

const CvPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>CV Page</title>
        <meta property="og:title" content="Ivan Boiko CV" />
        <meta property="og:description" content="Frontend engineer (developer)" />
        <meta property="og:image" content={photoIvanBoiko.src} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cv />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default CvPage;
