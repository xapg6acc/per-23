import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SettingsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>users</title>
      </Head>
      <>users page</>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale || 'uk', ['orders'])) },
  };
};

export default SettingsPage;
