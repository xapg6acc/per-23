import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import type { NextPage, GetStaticProps } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Typography } from '@app/old/skeleton';
import {} from '@app/old/auth/components/SignIn';

const ErrorPage: NextPage = () => {
  const { t } = useTranslation('common');
  const { data } = useSession();
  const { back } = useRouter();

  console.log(data);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h1" textAlign="center">
        {t('sign-in')}
      </Typography>
      <Box mt={2} mx="auto">
        <Button variant="outlined" onClick={back}>
          Back
        </Button>
      </Box>
      <Box mt={2} display="flex" mx="auto" gap={2}>
        <Button variant="contained" onClick={() => signIn()}>
          Sign In
        </Button>
        <Button variant="contained" onClick={() => signOut()}>
          Sign Out
        </Button>
      </Box>
    </Box>
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
