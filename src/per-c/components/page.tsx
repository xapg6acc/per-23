import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';

import { Ticker } from './ticker';
import { CAccordion } from '@app/per-c/components/accordion';

const tickerList = [1, 2, 3, 4, 5, 6, 7];

export const PerCPage = () => {
  const { push } = useRouter();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" gap={5} bgcolor="lightyellow">
      <Box p={5}>
        <Button fullWidth variant="outlined" onClick={() => push('/')}>
          back
        </Button>
      </Box>
      <Box height={600} position="relative">
        <Box
          display="flex"
          position="sticky"
          top={0}
          height={200}
          sx={{ backgroundColor: 'rgba(29, 29, 31, 0.2)', backdropFilter: 'saturate(180%) blur(10px)' }}
        ></Box>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate enim incidunt magnam placeat quasi,
        quisquam totam. Ab aliquam animi atque dolorem error fugiat impedit molestias optio, ullam! Autem, quia,
        repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate enim incidunt magnam placeat
        quasi, quisquam totam. Ab aliquam animi atque dolorem error fugiat impedit molestias optio, ullam! Autem, quia,
        repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate enim incidunt magnam placeat
        quasi, quisquam totam. Ab aliquam animi atque dolorem error fugiat impedit molestias optio, ullam! Autem, quia,
        repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate enim incidunt magnam placeat
        quasi, quisquam totam. Ab aliquam animi atque dolorem error fugiat impedit molestias optio, ullam! Autem, quia,
        repudiandae.
      </Box>
      <Ticker direction="right">
        {tickerList.map((item, index) => (
          <Box
            key={item}
            width={250}
            borderRadius={5}
            height={200}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color={index === 0 ? 'rgba(29, 29, 31, 0.2)' : 'common.white'}
            fontSize={40}
            overflow="hidden"
            sx={{
              backgroundColor: index === 0 ? 'rgba(255,255,255,0.72)' : 'rgba(29, 29, 31, 0.2)',
              backdropFilter: 'saturate(180%) blur(10px)',
            }}
          >
            {item}
          </Box>
        ))}
      </Ticker>
      <Box
        bgcolor="rgba(29, 29, 31, 0.72)"
        borderRadius={1}
        sx={{ backgroundColor: 'rgba(29, 29, 31, 0.2)', backdropFilter: 'saturate(180%) blur(10px)' }}
      >
        <CAccordion />
      </Box>
    </Box>
  );
};
