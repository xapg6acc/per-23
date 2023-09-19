import { useTranslation } from 'next-i18next';
import { GetStaticProps, NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Paper } from '@app/old/skeleton';
import { Level } from "@app/old/constants/level";
import image from '@app/old/images/wallhaven-l83o92.jpeg';

const list = [
  { title: 'Title 1', description: 'Description 1', category: 'Math', level: Level.Easy },
  { title: 'Title 2', description: 'Description 2', category: 'Math', level: Level.Easy },
  { title: 'Title 3', description: 'Description 3', category: 'Chemistry', level: Level.Hard },
  { title: 'Title 4', description: 'Description 4', category: 'Language', level: Level.Medium },
  { title: 'Title 5', description: 'Description 5', category: 'Chemistry', level: Level.Medium },
];

export const Cart = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      {list.map(item => (
        <Grid item xs={12} md={6} lg={4} key={item.title}>
          <Paper image={image} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

const CartPage: NextPage = () => {
  return (
    <>
      <main>
        <Cart />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default CartPage;
