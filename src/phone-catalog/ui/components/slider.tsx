import { Box, Grid } from '@mui/material';
import Slick, { Settings } from 'react-slick';
import { forwardRef, ReactNode, useRef } from 'react';

import { Phone } from '../../types';

export interface CategorySliderProps extends Omit<Settings, 'responsive' | 'children'> {
  readonly slides: Phone[];
  readonly renderItem: (props: Phone) => ReactNode;
}

// eslint-disable-next-line react/display-name
export const CategorySlider = forwardRef<Slick, CategorySliderProps>(({ slides, renderItem, ...props }, ref) => {
  const categorySliderBlockRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      // width={1140}
      minHeight="100%"
      sx={{
        '.slick-prev': { top: 222, right: 30 },
        '.slick-next': { top: 222, right: 0 },
        '.slick-center': {
          '.slick-slide-box': {
            padding: 0,
            transition: 'padding 1s',
          },
        },
        '.slick-slide': {
          '>div': {
            height: '100%',
          },
        },
        '.slick-list': {
          mr: -2,
        },
      }}
    >
      <div ref={categorySliderBlockRef}>
        <Slick
          ref={ref}
          infinite={false}
          centerPadding="0"
          slidesToShow={slides?.length < 4 ? slides?.length : 4}
          {...props}
        >
          {slides?.map(slide => (
            <Grid container columnSpacing={2} key={slide?.id}>
              {renderItem(slide)}
            </Grid>
          ))}
        </Slick>
      </div>
    </Box>
  );
});
