import { useRef } from 'react';
import SlickSlider from 'react-slick';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Backdrop, CircularProgress, Button } from '@mui/material';

import { Section } from './section';
import { useGetPhones } from '../api';
import { Banner } from '../ui/components/banner';
import { CatalogLayoutPage } from './layout/layout';
import { useApplication } from '../hooks/useApplication';
import image from '../images/banner.jpg';

export interface BannerSlide {
  readonly id: string;
  readonly url: string;
  readonly filter: string;
}

const slides: BannerSlide[] = [
  { id: '0', url: image.src, filter: 'none' },
  { id: '1', url: image.src, filter: 'blur(5px)' },
  { id: '2', url: image.src, filter: 'invert(1)' },
  // { id: '3', url: image, filter: 'grayscale(70%)' },
  // { id: '4', url: image, filter: 'contrast(200%)' },
];

export const CatalogHome = () => {
  const sliderRef = useRef<SlickSlider | null>(null);
  const { data = [], isLoading } = useGetPhones();

  return (
    <CatalogLayoutPage>
      {isLoading ? (
        <Backdrop open={isLoading} style={{ zIndex: 99999 }}>
          <CircularProgress />
        </Backdrop>
      ) : (
        <Box mt={5}>
          <Box mx={9.5}>
            <Banner
              autoplay
              autoplaySpeed={3000}
              slides={slides}
              ref={sliderRef}
              renderItem={item => (
                <img src={item.url} alt={item.id} style={{ filter: item?.filter, height: 400, width: '100%' }} />
              )}
            />
          </Box>
          {/* @ts-ignore */}
          <Section list={data[0]} title={`Hot prices (${data[0].length || 0})`} />
        </Box>
      )}
    </CatalogLayoutPage>
  );
};
