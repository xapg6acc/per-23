import Image from 'next/image';
import { useState } from 'react';
import { Box, Divider } from '@mui/material';

import { Typography } from '@app/old/skeleton';

import cat from '../images/mono-cat.png';
import { Currency } from '../types/currency';

export interface MonoCurrencyProps {
  readonly item: Partial<Currency>;
}

const time = [{ key: 'first', value: 1000 }, { key: 'second', value: 1500 }, { key: 'third', value: 2000 }];

export const MonoCurrency = ({ item }: MonoCurrencyProps) => {
  const [loading, setIsLoading] = useState<Record<string, boolean>>({ first: true, second: true, third: true });

  time.map(item => setTimeout(() => setIsLoading(s => ({ ...s, [item.key]: false })), item.value));

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
      <Divider />
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
