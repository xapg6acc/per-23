import { Backdrop, CircularProgress, Grid } from '@mui/material';

import { HomePageSectionDeviceCard } from './home-device-card';

// import { useGetFavoriteList } from '../api';
import { CatalogLayoutPage } from './layout/layout';
import { useApplication } from '../hooks/useApplication';

export const Favorite = () => {
  const { favorite } = useApplication('regular');
  // const { data = [], isLoading } = useGetFavoriteList(favorite);

  // return isLoading ? (
  //   <Backdrop open={isLoading} style={{ zIndex: 99999, color: 'lightgray' }}>
  //     <CircularProgress color="inherit" />
  //   </Backdrop>
  // ) :
  return (
    <CatalogLayoutPage>
      <Grid container columnSpacing={2}>
        {favorite.map(device => (
          <HomePageSectionDeviceCard key={device.id} device={device} md={3} />
        ))}
      </Grid>
    </CatalogLayoutPage>
  );
};
