import Image from 'next/image';
import { useState } from 'react';
import { Box } from '@mui/material';

import { Typography } from '@app/old/skeleton';

import cat from '../images/mono-cat.png';
import { Currency } from '../types/currency';

export interface MonoCurrencyProps {
  readonly item: Partial<Currency>;
}

export const MonoCurrency = ({ item }: MonoCurrencyProps) => {
  const [loading, setIsLoading] = useState<Record<string, boolean>>({ first: true, second: true, third: true });

  setTimeout(() => setIsLoading(s => ({ ...s, first: false })), 1500);
  setTimeout(() => setIsLoading(s => ({ ...s, second: false })), 2000);
  setTimeout(() => setIsLoading(s => ({ ...s, third: false })), 2500);

  return (
    <Box
      p={2}
      height={250}
      width={250}
      display="flex"
      flexDirection="column"
      borderRadius={5}
      position="relative"
      sx={{ backgroundColor: 'rgba(29, 29, 31, 0.05)', backdropFilter: 'saturate(180%) blur(4px)' }}
    >
      <Image fill src={cat.src} alt="cat" style={{ bottom: 0, right: 0 }} />
      <Typography isLoading={loading.first}>{item.title}</Typography>
      <Box width={0.5}>
        <Typography isLoading={loading.second} textTransform="lowercase">
          buy: {item.rateBuy}
        </Typography>
      </Box>
      <Box width={0.5}>
        <Typography isLoading={loading.third} textTransform="lowercase">
          sell: {item.rateSell}
        </Typography>
      </Box>
    </Box>
  );
};
