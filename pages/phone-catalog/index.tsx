import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CatalogHome } from '@app/phone-catalog/components/home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Phone Catalog Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CatalogHome />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default HomePage;
