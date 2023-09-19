import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Box, Grid, Backdrop, CircularProgress, Button, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { CatalogLayoutPage } from './layout/layout';
import { useApplication } from '../hooks/useApplication';
const CartItem = dynamic(() => import('./cart-item').then(page => page.CartItem), { ssr: false });

export const Cart = () => {
  const { back } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const { cart = [], updateStore, cartAmount, updateQuantity } = useApplication('regular');

  return isLoading ? (
    <Backdrop open={isLoading} style={{ zIndex: 99999, color: 'lightgray' }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <CatalogLayoutPage>
      <Button startIcon={<KeyboardArrowLeftIcon />} sx={{ textTransform: 'initial' }} onClick={back}>
        Back
      </Button>
      <Grid container columnSpacing={2}>
        <Grid item md={9}>
          <Box display="flex" flexDirection="column" gap={2}>
            {cart.map(item => (
              <CartItem key={item.phoneId} item={item} />
            ))}
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box
            p={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            border="1px solid"
            borderColor="grey.100"
          >
            <Typography variant="h2">{`$${cartAmount || 0}`}</Typography>
            <Typography color="grey.50">Total for {cart.length} items</Typography>
            <Box my={3} borderBottom="1px solid" borderColor="grey.100" width={1} />
            <Button fullWidth variant="contained">
              Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </CatalogLayoutPage>
  );
};
