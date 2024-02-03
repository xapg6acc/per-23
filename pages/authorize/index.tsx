import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Authorize } from '@app/auth/components/Authorize';

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auth Page</title>
      </Head>
      <main>
        <Authorize />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default SignUpPage;
