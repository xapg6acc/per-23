import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import {
  Backdrop,
  Button,
  CircularProgress,
  Typography,
  Box,
  Grid,
  ButtonBase,
  IconButton,
  Slide,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { useGetPhone } from '../api';
import { CatalogLayoutPage } from './layout/layout';
import { useApplication } from '../hooks/useApplication';

export const Device = () => {
  const { query, back } = useRouter();
  const { updateStore, updateFavorite, isFavorite, isAddedToCart } = useApplication('detailed');
  const { data: item, isLoading } = useGetPhone(query?.slug as string);
  const [activeImage, setActiveImage] = useState<string | undefined>();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (item?.images) {
      setChecked(false);
      setActiveImage(item.images[0]);
      setTimeout(() => setChecked(true), 250);
    }
  }, [item?.images]);

  const handleActive = useCallback(
    (image: string) => {
      if (image !== activeImage) {
        setChecked(false);
        setActiveImage(image);
        setTimeout(() => setChecked(true), 250);
      }
    },
    [activeImage],
  );

  return isLoading ? (
    <Backdrop open={isLoading} style={{ zIndex: 99999, color: 'lightgray' }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <>
      <Head>
        <title>{item?.name}</title>
      </Head>
      <CatalogLayoutPage>
        <Button startIcon={<KeyboardArrowLeftIcon />} sx={{ textTransform: 'initial' }} onClick={back}>
          Back
        </Button>
        <Typography variant="h1">{item?.name}</Typography>
        <Grid container columnSpacing={8}>
          <Grid item md={6}>
            <Box display="flex" gap={2} minHeight={460}>
              <Box display="flex" flexDirection="column" gap={2}>
                {item?.images.map((image, index) => (
                  <ButtonBase
                    key={image}
                    onClick={() => handleActive(image)}
                    sx={{
                      width: 80,
                      height: 80,
                      border: '1px solid',
                      borderColor: activeImage === image ? 'common.black' : 'grey.100',
                    }}
                  >
                    <img
                      src={'/' + image}
                      alt={image}
                      height={78}
                      width={78}
                      style={{ objectFit: 'contain', padding: 8, transform: index === 4 ? 'translate(0, 8px)' : '' }}
                    />
                  </ButtonBase>
                ))}
              </Box>
              <ButtonBase sx={{ width: 1, overflow: 'hidden' }}>
                <Slide direction="up" in={checked} style={{ maxWidth: 464, maxHeight: 464 }}>
                  <img src={'/' + activeImage} alt={activeImage} style={{ objectFit: 'contain' }} />
                </Slide>
              </ButtonBase>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={7} display="flex" flexDirection="column" flexGrow={1}>
                colors
                <Box borderBottom="1px solid" borderColor="grey.100" width={1} />
                <Box display="flex" flexGrow={1} minWidth={1}>
                  capacity
                </Box>
                <Box borderBottom="1px solid" borderColor="grey.100" width={1} />
                price
                <Box display="flex" gap={2}>
                  <Button
                    fullWidth
                    // @ts-ignore
                    onClick={() => updateStore(item, 'cart')}
                    // @ts-ignore
                    variant={isAddedToCart(item) ? 'outlined' : 'contained'}
                  >
                    {/* @ts-ignore */}
                    {isAddedToCart(item) ? 'Added' : 'Add'} to cart
                  </Button>
                  <IconButton
                    // @ts-ignore
                    onClick={() => updateStore(item, 'favorite')}
                    sx={{
                      width: 40,
                      aspectRatio: 1,
                      borderRadius: 0,
                      border: '1px solid',
                      borderColor: 'common.black',
                    }}
                  >
                    {/* @ts-ignore */}
                    {isFavorite(item) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                  </IconButton>
                </Box>
                description
              </Grid>
              <Grid item md={5} textAlign="end">
                <Typography variant="h4" color="primary.main">
                  ID: {item?.priceDiscount}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container columnSpacing={8} mt={10}>
          <Grid item md={6.25}>
            <Typography variant="h2">About</Typography>
            <Box borderBottom="1px solid" borderColor="grey.100" width={1} />
            {item?.description.map(description => (
              <Box key={description.title}>
                <Typography variant="h3">{description.title}</Typography>
                <Box display="flex" flexDirection="column" gap={2.5}>
                  {description.text.map(text => (
                    <Typography key={text} color="grey.50">
                      {text}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item md={5.75}>
            <Typography variant="h2">Tech specs</Typography>
            <Box borderBottom="1px solid" borderColor="grey.100" width={1} />
          </Grid>
        </Grid>
      </CatalogLayoutPage>
    </>
  );
};
