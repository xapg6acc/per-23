import { useTranslation } from 'next-i18next';
import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Typography } from '@skeleton';

const ConfirmEmailPage: NextPage = () => {
  const { t } = useTranslation('common');

  return <Typography variant="h1">{t('confirm email')}</Typography>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...(await serverSideTranslations('uk')),
    },
  };
};

export default ConfirmEmailPage;
