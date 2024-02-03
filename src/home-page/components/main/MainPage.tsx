import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid, Button } from '@mui/material';

import { MainItem } from '../../types';
import { PageLayout } from '../layout/page';
import { TooltipButton } from '../TooltipButton';

import i18n from '../../images/i18n.jpeg';
import uaFlagImage from '../../images/ua-flag.png';
import dzenCodeImage from '../../images/dzen-code.png';
import reactTsImage from '../../images/react-ts.png';
import phoneCatalogImage from '../../images/phone-catalog-banner.png';

const mainList: MainItem[] = [
  {
    // target: '_self',
    image: reactTsImage,
    to: '/resume',
    title: 'Curriculum Vitae',
    tooltip: 'Go to CV',
  },
  {
    // target: '_self',
    image: i18n,
    to: '/plural',
    title: 'Plurals',
    tooltip: 'Go to Plurals page',
  },
  {
    // target: '_self',
    image: phoneCatalogImage,
    to: '/phone-catalog',
    title: 'Phone Catalog',
    tooltip: 'Go to react phone catalog page',
  },
  {
    // target: '_self',
    image: dzenCodeImage,
    to: '/orders-application/coming',
    title: 'Orders & Products',
    tooltip: 'Go to Orders & Products page',
  },
  {
    // target: '_self',
    image: uaFlagImage,
    to: '/authorize',
    title: 'Sign In/Up Page',
    tooltip: 'Go to create user page',
  },
  {
    // target: '_self',
    image: uaFlagImage,
    to: '/',
    title: 'Free Azov',
    tooltip: 'Glory to Ukraine',
  },
  {
    target: '_blank',
    image: uaFlagImage,
    href: 'https://prytulafoundation.org/en/',
    title: 'Prytula Foundation',
    tooltip: 'Glory to Ukraine',
  },
  {
    target: '_blank',
    image: uaFlagImage,
    href: 'https://savelife.in.ua/en/',
    title: 'Come Back Alive',
    tooltip: 'Glory to Ukraine',
  },
  {
    // target: '_self',
    image: uaFlagImage,
    to: '/',
    title: '中で死んだ',
    tooltip: 'Glory to Ukraine',
  },
];

export const MainPage = () => {
  const { push } = useRouter();

  const handleClick = useCallback(async (to?: string) => {
    await push(to ?? '/');

    scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <PageLayout>
      <Grid display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={5}>
        {mainList.map(item => (
          <Grid key={item.title} gridColumn="span 1" p={4}>
            <TooltipButton onClick={() => handleClick(item?.to)} item={item} />
            <Box mt={1} display="flex" justifyContent="flex-end">
              <Button onClick={() => handleClick(item?.to)}>{item.title}</Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};
