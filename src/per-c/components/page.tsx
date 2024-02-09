import { useRouter } from 'next/router';
import { Box, Button, Grid } from '@mui/material';

import { Ticker } from './ticker';
import { CAccordion } from '@app/per-c/components/accordion';

const tickerList = [1, 2, 3, 4, 5, 6, 7];

export const PerCPage = () => {
  const { push } = useRouter();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box p={5}>
        <Button fullWidth variant="outlined" onClick={() => push('/')}>
          back
        </Button>
      </Box>
      <Ticker direction="right">
        {tickerList.map((item, index) => (
          <Box
            key={item}
            width={250}
            bgcolor={index === 0 ? 'gray' : 'black'}
            borderRadius={5}
            height={200}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="common.white"
            fontSize={40}
          >
            {item}
          </Box>
        ))}
      </Ticker>
      <Box mt="auto" bgcolor="lightgray" borderRadius={1}>
        <CAccordion />
      </Box>
    </Box>
  );
};
