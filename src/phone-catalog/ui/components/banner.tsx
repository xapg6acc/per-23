import Slick, { Settings } from 'react-slick';
import { Box, IconButton } from '@mui/material';
import { ReactNode, useRef, forwardRef } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface BannerSliderProps extends Omit<Settings, 'responsive' | 'children'> {
  readonly slides: {
    readonly id: string;
    readonly url: string;
    readonly filter: string;
  }[];
  readonly renderItem: (props: { readonly id: string; readonly url: string; readonly filter: string }) => ReactNode;
}

// eslint-disable-next-line react/display-name
export const Banner = forwardRef<Slick, BannerSliderProps>(({ slides, renderItem, ...props }, ref) => {
  const sliderBlockRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      sx={{
        '.slick-arrow': { button: { height: '100%' }, display: 'flex' },
        '.slick-prev': { left: -46 },
        '.slick-list': { mx: 2 },
        '.slick-center': {
          '.slick-slide-box': {
            padding: 0,
            transition: { md: 'padding 1s' },
          },
        },
        '.slick-arrow::before': { display: 'none' },
        '.slick-slide': {
          maxHeight: '400px',
          '>div': {
            height: '100%',
          },
        },
        '.slick-dots': {
          bottom: '-45px',
          top: 'initial',
          button: {
            ':before': {
              opacity: 1,
              height: '4px',
              content: '" "',
              backgroundColor: theme => theme.palette.primary.main,
            },
          },
          '.slick-active button': {
            ':before': {
              opacity: 1,
              height: '4px',
              content: '" "',
              backgroundColor: theme => theme.palette.common.black,
            },
          },
        },
      }}
    >
      <div ref={sliderBlockRef}>
        <Slick
          dots
          arrows
          centerPadding="0"
          prevArrow={
            <Box display="flex" justifyContent="center" minHeight="100%">
              <IconButton
                sx={{
                  left: 0,
                  borderRadius: 0,
                  border: theme => `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
            </Box>
          }
          nextArrow={
            <Box display="flex" justifyContent="center" minHeight="100%">
              <IconButton
                sx={{
                  right: 0,
                  borderRadius: 0,
                  border: theme => `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>
          }
          {...props}
          ref={ref}
          slidesToShow={1}
        >
          {slides.map(slide => {
            return (
              <Box key={slide.id} width="initial" sx={[{ height: '400px' }]}>
                {renderItem(slide)}
              </Box>
            );
          })}
        </Slick>
      </div>
    </Box>
  );
});
