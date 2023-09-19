import { Grid, Box, IconButton, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { DummyList } from './form';

interface DummyCardProps {
  readonly item: DummyList;
  readonly onClick: (value: string) => void;
}

export const colorMap = {
  card: 'rgb(254, 236, 108)',
  icon: 'rgb(193, 133, 18)',
  border: 'rgb(71, 25, 27)',
};

export const DummyCard = ({ item, onClick }: DummyCardProps) => {
  return (
    <Grid item xs={12} key={item.id} bgcolor={colorMap.card} position="relative">
      <Box
        display="flex"
        alignItems="center"
        position="absolute"
        top={0}
        left={0}
        sx={{ transform: 'translate(-10%, -50%)' }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          bgcolor={colorMap.icon}
          width={60}
          zIndex={1}
          sx={{ aspectRatio: '1/1' }}
        >
          <Typography fontSize={30} color="white" textTransform="uppercase">
            {item.userInitials}
          </Typography>
        </Box>
        <Box bgcolor={colorMap.icon} p={0.5} mx={-1} width="10rem">
          <Typography pl={1} color="black">{item.userName}</Typography>
        </Box>
      </Box>
      <Box p={4}>
        <Typography color="black">{item.comment}</Typography>
      </Box>
      <IconButton
        onClick={() => onClick(item.comment)}
        sx={{
          p: 0.25,
          backgroundColor: colorMap.icon,
          position: 'absolute',
          top: 0,
          right: 0,
          transform: 'translate(50%, -50%)',
          svg: {
            height: 16,
            width: 16,
          },
          ':hover': {
            backgroundColor: colorMap.icon,
          },
        }}
      >
        <ClearIcon />
      </IconButton>
    </Grid>
  );
};
