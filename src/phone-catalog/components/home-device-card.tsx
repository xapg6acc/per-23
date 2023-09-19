import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Grid, GridProps, IconButton, Typography, ButtonBase } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Phone, PhoneDetailed } from '../types';
import { useApplication } from '../hooks/useApplication';

enum ItemParams {
  Screen = 'Screen',
  Capacity = 'Capacity',
  Ram = 'RAM',
}

export interface HomePageSectionDeviceCardProps extends GridProps {
  readonly device: Phone;
}

const noData = 'No data.';

export const HomePageSectionDeviceCard = ({ device, ...props }: HomePageSectionDeviceCardProps) => {
  const { updateStore, updateFavorite, cart, favorite, isFavorite, isAddedToCart } = useApplication('regular');
  const { push } = useRouter();
  // console.log({ image: device.image });

  const aboutList = useMemo(() => {
    const ram = (device.ram ?? '000').slice(-2);
    const capacity = (device.capacity ?? '000').slice(-2);

    return [
      { [ItemParams.Screen]: device.screen },
      {
        // device.capacity === noData ? noData : device.capacity.replace(capacity, ` ${capacity}`),
        [ItemParams.Capacity]: device.capacity?.replace(capacity, ` ${capacity}`) ?? noData,
      },
      {
        // [ItemParams.Ram]: device.ram === noData ? noData : device.ram.replace(ram, ` ${ram}`),
        [ItemParams.Ram]: device.ram?.replace(ram, ` ${ram}`) ?? noData,
      },
    ];
  }, [favorite, cart]);

  // const isAddedToCart = cart.some(item => item.phoneId === device.phoneId);
  // const isFavorite = favorite.some(item => item.phoneId === device.phoneId);

  return (
    <Grid item height="520px" {...props}>
      <Box display="flex" flexDirection="column" border="1px solid" borderColor="grey.100" p={3} height={1}>
        <ButtonBase onClick={() => push(`phone-catalog/${device.phoneId}`)}>
          <img
            src={'/' + device.image}
            alt={device.name}
            style={{
              height: 210,
              margin: '0 auto',
            }}
          />
        </ButtonBase>
        <Typography mt={3} variant="body1">
          {device.name}
        </Typography>
        <Box mt="auto">
          <Box display="flex" gap={1}>
            <Typography variant="h2">{`$${device.price}`}</Typography>
            <Typography variant="h2" fontWeight={500} color="grey.50" sx={{ textDecoration: 'line-through' }}>
              {`$${device.fullPrice}`}
            </Typography>
          </Box>
          <Box mt={0.75} border="1px solid" borderColor="grey.100" />
        </Box>
        <Grid container py={2} gap={1}>
          {aboutList.map(description => {
            return Object.entries(description).map(([key, value]) => (
              <Grid xs={12} item key={key} display="flex" justifyContent="space-between">
                <Typography variant="subtitle1" color="grey.50">
                  {key}
                </Typography>
                <Typography variant="subtitle1">{value}</Typography>
              </Grid>
            ));
          })}
        </Grid>
        <Box display="flex" gap={1}>
          <Button
            fullWidth
            // @ts-ignore
            onClick={() => updateStore(device, 'cart')}
            // @ts-ignore
            variant={isAddedToCart(device) ? 'outlined' : 'contained'}
          >
            {/* @ts-ignore */}
            {isAddedToCart(device) ? 'Added' : 'Add'} to cart
          </Button>
          <IconButton
            // @ts-ignore
            onClick={() => updateStore(device, 'favorite')}
            sx={{
              width: 40,
              aspectRatio: 1,
              borderRadius: 0,
              border: '1px solid',
              borderColor: 'common.black',
            }}
          >
            {/* @ts-ignore */}
            {isFavorite(device) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};
