import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import { GetStaticProps, NextPage } from 'next';
import { Box, Button, Divider, Grid, Paper } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Typography } from '@app/old/skeleton/';

const list = [
  'time.dayCount',
  'time.weekCount',
  'time.monthCount',
  'time.yearCount',
  'time.timesCount',
  'unit.kgCount',
  'unit.lbCount',
  'unit.cmCount',
  'unit.inCount',
  'unit.lCount',
  'pageCount',
  'subscriptionCount',
  'favoriteCount',
];

const PluralPage: NextPage = () => {
  const { push } = useRouter();
  const { t } = useTranslation('plural');
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [loading]);

  return (
    <>
      {/*<Head>*/}
      {/*  <title>plural</title>*/}
      {/*  <link rel="icon" href="/favicon.ico" />*/}
      {/*</Head>*/}
      <Box minHeight="100vh" maxWidth={900} display="flex" justifyContent="center" flexDirection="column" mx="auto">
        <Button fullWidth variant="outlined" onClick={() => push('/')}>
          back
        </Button>
        <Paper sx={{ p: 2, mt: 2 }}>
          <Grid container spacing={5}>
            {list.map(item => (
              <Grid item key={item} xs={3}>
                <Typography isLoading={loading} fontWeight={700}>
                  {item}
                </Typography>
                <Divider />
                {[1, 2, 5].map(value => (
                  <Typography isLoading={loading} key={value}>
                    {t(item, { count: value })}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default PluralPage;
