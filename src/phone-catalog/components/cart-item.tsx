import { Box, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Phone } from '../types';
import { useApplication } from '../hooks/useApplication';
import { Icons, SliderButton } from '@app/phone-catalog/ui/components/slider-button';

export interface CartItemProps {
  readonly item: Phone;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateStore, updateQuantity } = useApplication('regular');

  return (
    <Grid
      container
      pl={3}
      pr={5}
      border="1px solid"
      borderColor="grey.100"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item md={0.75} mx="auto">
        {/* @ts-ignore */}
        <IconButton onClick={() => updateStore(item, 'cart')} sx={{ height: 1 }}>
          <CloseIcon sx={{ color: 'primary.main' }} />
        </IconButton>
      </Grid>
      <Grid item md={1.75}>
        <Box m={3} width={66} height={66} display="flex" justifyContent="center" alignItems="center">
          <img src={'/' + item.image} alt={item.screen} style={{ height: 66, width: 66, objectFit: 'contain' }} />
        </Box>
      </Grid>
      <Grid item md={6.75}>
        {item.name}
      </Grid>
      <Grid item md={2}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1.5}>
          <SliderButton
            disabled={!item?.quantity || item?.quantity === 1}
            size="xs"
            icon={Icons.Remove}
            // @ts-ignore
            onClick={() => updateQuantity(item, 'decrease')}
          />
          <Typography variant="h2" fontWeight={500}>
            {item?.quantity || 0}
          </Typography>
          {/* @ts-ignore */}
          <SliderButton size="xs" icon={Icons.Add} onClick={() => updateQuantity(item, 'increase')} />
        </Box>
      </Grid>
      <Grid item md={0.75}>
        <Typography variant="h2">{`$${item.price}`}</Typography>
      </Grid>
    </Grid>
  );
};
