import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import { GetStaticProps, NextPage } from 'next';
import { Grid, Typography, Box } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
      <main>
        <Grid container spacing={5}>
          {list.map(item => (
            <Grid item key={item}>
              <Typography fontWeight={700}>{item}</Typography>
              {[1, 2, 5].map(value => (
                <Typography key={value}>{t(item, { count: value })}</Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default PluralPage;
