import { Grow, Box, Fab, useScrollTrigger } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';

export const ScrollTop = () => {
  const trigger = useScrollTrigger();
  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Grow in={trigger}>
      <Box position="fixed" bottom={20} right={20} onClick={handleClick}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <NorthIcon />
        </Fab>
      </Box>
    </Grow>
  );
};
