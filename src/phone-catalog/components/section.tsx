import Slider from 'react-slick';
import { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { Phone } from '../types/';
import { CategorySlider } from '../ui/components/slider';
import { HomePageSectionDeviceCard } from './home-device-card';
import { Icons, SliderButton } from '../ui/components/slider-button';

export interface HomePageSectionProps {
  readonly list: Phone[];
  readonly title: string;
}

interface DisabledStateProps {
  readonly prev: boolean;
  readonly next: boolean;
}

const initialDisabledState: DisabledStateProps = {
  prev: true,
  next: false,
};

export const Section = ({ list, title }: HomePageSectionProps) => {
  const ref = useRef<Slider | null>(null);
  const [disabled, setDisabled] = useState<DisabledStateProps>(initialDisabledState);

  const handlePrevious = () => {
    if (ref.current) {
      ref.current?.slickPrev();
    }
  };

  const handleNext = () => {
    if (ref.current) {
      ref.current?.slickNext();
    }
  };

  return (
    <Box mt={9} maxWidth={1140} mx="auto">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h1">{title}</Typography>
        {list.length > 4 && (
          <Box display="flex" alignItems="center" gap={2}>
            <SliderButton disabled={disabled.prev} onClick={handlePrevious} icon={Icons.Previous} size="xs" />
            <SliderButton disabled={disabled.next} onClick={handleNext} icon={Icons.Next} size="xs" />
          </Box>
        )}
      </Box>
      <Box mt={3}>
        <CategorySlider
          swipeToSlide
          ref={ref}
          // speed={200}
          slides={list}
          // slidesToScroll={Math.ceil(Math.random() * 4)}
          beforeChange={(_prev, next) => {
            setDisabled(prevState => ({ ...prevState, prev: next === 0 }));
          }}
          afterChange={current => {
            setDisabled(prevState => ({
              ...prevState,
              next: list.length > 4 && list.length === current + 4,
            }));
          }}
          renderItem={item => <HomePageSectionDeviceCard key={item.id} device={item} />}
        />
      </Box>
    </Box>
  );
};
