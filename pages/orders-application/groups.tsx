import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GroupsPage as Groups } from '@app/orders-application/components/group/GroupsPage';

const GroupsPage: NextPage = () => {
  const { t } = useTranslation('orders');

  return (
    <>
      <Head>
        <title>{t('menu.groups')}</title>
      </Head>
      <Groups />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale || 'uk', ['orders'])) },
  };
};

export default GroupsPage;
