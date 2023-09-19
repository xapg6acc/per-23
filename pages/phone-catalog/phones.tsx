import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Phones } from '@app/phone-catalog/components/phones';

const PhonesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Phones Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Phones />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default PhonesPage;
