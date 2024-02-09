import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PerCPage } from '@app/per-c/components/page';

const PerPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Drafts Page</title>
      </Head>
      <main>
        <PerCPage />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default PerPage;
