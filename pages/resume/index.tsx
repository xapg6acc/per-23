import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CvPage as Cv } from '@app/cv-page/components/cv';

const CvPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>CV Page</title>
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
