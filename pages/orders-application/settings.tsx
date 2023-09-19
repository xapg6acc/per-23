import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { SettingsPage as Settings } from '@app/orders-application/components/settings/SettingsPage';

const SettingsPage: NextPage = () => {
  const { t } = useTranslation('orders');

  return (
    <>
      <Head>
        <title>{t('menu.settings')}</title>
      </Head>
      <Settings />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale || 'uk', ['orders'])) },
  };
};

export default SettingsPage;
