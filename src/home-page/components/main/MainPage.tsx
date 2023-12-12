import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';
import { Box, Grid, Button, ButtonBase, Tooltip, Typography } from '@mui/material';

import { PageLayout } from '../layout/page';
import uaFlagImage from '../../images/ua-flag.png';
import dzenCodeImage from '../../images/dzen-code.png';
import reactTsImage from '../../images/react-ts.png';
import phoneCatalogImage from '../../images/phone-catalog-banner.png';

interface MainItem {
  readonly to?: string;
  readonly href?: string;
  readonly title: string;
  readonly image: StaticImageData;
  readonly target?: string;
  readonly tooltip: string;
}

const mainList: MainItem[] = [
  {
    // target: '_self',
    image: dzenCodeImage,
    to: '/orders-application/coming',
    title: 'Orders & Products',
    tooltip: 'Go to Orders & Products page',
  },
  {
    // target: '_self',
    image: reactTsImage,
    to: '/resume',
    title: 'Curriculum Vitae',
    tooltip: 'Go to CV',
  },
  {
    // target: '_self',
    image: uaFlagImage,
    to: '/sign-in',
    title: 'Sign In/Up Page',
    tooltip: 'Go to create user page',
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

// todo: replace grid with masonry
export const MainPage = () => {
  const { push } = useRouter();

  return (
    <PageLayout>
      <Grid display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={5}>
        {mainList.map(item => (
          <Grid key={item.title} gridColumn="span 1" p={4}>
            <Tooltip title={item.tooltip}>
              <ButtonBase
                // href={item?.href}
                // target={item?.target}
                onClick={async () => {
                  console.log(item.title.length);
                  if (item?.to) {
                    scrollTo({ top: 0, behavior: 'smooth' });
                    await push(item.to);
                  }
                }}
                sx={{ borderRadius: 5, overflow: 'hidden', ':hover': { backgroundColor: 'rgba(220, 220, 220, 0.5)' } }}
              >
                <Box
                  width={1}
                  display="grid"
                  fontSize="5rem"
                  fontWeight={700}
                  textAlign="center"
                  sx={{
                    span: {
                      color: 'transparent',
                      backgroundClip: 'content-box',
                    },
                    ':hover > span': {
                      backgroundClip: 'text',
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      backgroundImage: `url(${item.image.src})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    {item.title}
                  </Box>
                </Box>
              </ButtonBase>
            </Tooltip>
            <Box mt={1} display="flex" justifyContent="flex-end">
              <Button
                // href={item?.href}
                // target={item?.target}
                onClick={async () => {
                  if (item?.to) {
                    scrollTo({ top: 0, behavior: 'smooth' });
                    await push(item.to);
                  }
                }}
              >
                {item.title}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};
