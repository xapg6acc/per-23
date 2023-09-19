import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ComingPage as Coming } from '@app/orders-application/components/coming/ComingPage';

const ComingPage: NextPage = () => {
  const { t } = useTranslation('orders');

  return (
    <>
      <Head>
        <title>{t('menu.coming')}</title>
      </Head>
      <Coming />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: { ...(await serverSideTranslations(locale || 'uk', ['orders'])) },
  };
};

export default ComingPage;
