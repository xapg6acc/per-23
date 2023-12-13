import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grow, Box, Fab, useScrollTrigger, Tooltip, CircularProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export const Home = () => {
  const { push } = useRouter();
  const trigger = useScrollTrigger();

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      push('/');
    }, 250);
  }, []);

  return (
    <Grow in={trigger}>
      <Box position="fixed" bottom={50} right={50} onClick={handleClick} zIndex={99999}>
        <Fab size="small">
          <HomeIcon sx={{ color: '', fontSize: 32, strokeLinecap: 'round' }} />
        </Fab>
      </Box>
    </Grow>
  );
};
