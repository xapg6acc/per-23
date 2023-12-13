import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Typography } from '@app/old/skeleton';

const ErrorPage: NextPage = () => {
  const { t } = useTranslation('common');
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <Box minHeight="100vh" maxWidth={600} display="flex" flexDirection="column" justifyContent="center" mx="auto">
        <Button fullWidth variant="outlined" onClick={() => push('/')}>
          home
        </Button>
        <Typography variant="h1" textAlign="center">
          {t('404')}
        </Typography>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...(await serverSideTranslations('uk')),
    },
  };
};

export default ErrorPage;
