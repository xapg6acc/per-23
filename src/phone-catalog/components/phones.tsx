import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Box, Grid, Button, CircularProgress, Backdrop } from '@mui/material';

import { useGetPhones } from '../api';
import { Phone, PhoneListParams } from '../types';
import { CatalogLayoutPage } from './layout/layout';
import { Icons, SliderButton } from '@app/phone-catalog/ui/components/slider-button';
import { HomePageSectionDeviceCard } from '@app/phone-catalog/components/home-device-card';

export const Phones = () => {
  const { query, replace } = useRouter();
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState<PhoneListParams>({ page: 1, perPage: 16, sortBy: 'asc' });
  const { data: list = [], isLoading } = useGetPhones({
    enabled: !loading,
    onSuccess: async data => {
      console.log('onSuccess', data);
      if (data) {
        // return data
        //   .sort((a, b) => {
        //     switch (params.sortBy) {
        //       case 'new':
        //         console.log('new');
        //         return b.year - a.year;
        //       case 'old':
        //         return a.year - b.year;
        //       case 'asc':
        //         return a.name.localeCompare(b.name);
        //       case 'desc':
        //         return b.name.localeCompare(a.name);
        //       default:
        //         console.log('🌚');
        //     }
        //   })
        //   .reduce(
        //     (acc, item) => {
        //       if (Number(params.perPage) === 0) {
        //         console.log('reduce', acc);
        //         console.log('all', Number(params.perPage));
        //         acc.push(item);
        //       } else if (acc[acc.length - 1].length === Number(params.perPage)) {
        //         acc.push([item]);
        //       }
        //
        //       return acc;
        //     },
        //     [[]] as Phone[][],
        //   );
      }
    },
  });

  console.log(list);

  useEffect(() => {
    // console.log('query', query);
    try {
      setLoading(true);
      // setLoading(true);
      if (!loading) {
        // setParams({
        //   page: query.page,
        //   perPage: String(query.perPage).replace('all', 0),
        //   sortBy: query.sortBy,
        // });
        console.log('effect try setParams', query);
      }
    } catch (e) {
      console.log('error', e);
    } finally {
      // setParams({
      //   page: query.page,
      //   perPage: String(query.perPage).replace('all', 0),
      //   sortBy: query.sortBy,
      // });
      console.log('effect finally params', params);
      // setTimeout(() => setLoading(false), 2000);
    }
  }, [query]);
  console.log(params, { loading });

  return isLoading ? (
    <Backdrop open={loading} style={{ zIndex: 99999, color: 'lightgray' }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <CatalogLayoutPage>
      <>
        <>
          {/*{params.perPage !== 'all' && (*/}
          {/*<Grid container columnSpacing={2} rowSpacing={5}>*/}
          {/*  /!*<Grid item xs={12}>*!/*/}
          {/*  {(data[params?.page - 1] || data).map(item => (*/}
          {/*    <HomePageSectionDeviceCard key={item.id} device={item} xs={3} />*/}
          {/*  ))}*/}
          {/*  /!*</Grid>*!/*/}
          {/*  <Grid item width={1}>*/}
          {/*    {params?.perPage !== 'all' && (*/}
          {/*      <Box display="flex" justifyContent="center" gap={2} sx={{ '.MuiButton-contained': { minWidth: 32 } }}>*/}
          {/*        <SliderButton*/}
          {/*          size="xs"*/}
          {/*          icon={Icons.Previous}*/}
          {/*          disabled={params.page === 1}*/}
          {/*          onClick={() => setParams(prev => ({ ...prev, page: prev?.page - 1 }))}*/}
          {/*        />*/}
          {/*        <Box display="flex" gap={1}>*/}
          {/*          {data?.map((item, index) => {*/}
          {/*            const idx = index + 1;*/}
          {/*            const active = params?.page === idx;*/}

          {/*            return (*/}
          {/*              <Button*/}
          {/*                key={idx}*/}
          {/*                variant={active ? 'contained' : 'outlined'}*/}
          {/*                onClick={() => setParams(prev => ({ ...prev, page: idx }))}*/}
          {/*                sx={{*/}
          {/*                  p: 1,*/}
          {/*                  width: 32,*/}
          {/*                  height: 32,*/}
          {/*                  borderRadius: 0,*/}
          {/*                  border: '1px solid',*/}
          {/*                  borderColor: active ? 'common.black' : 'grey.50',*/}
          {/*                  color: active ? 'common.white' : 'common.black',*/}
          {/*                }}*/}
          {/*              >*/}
          {/*                {idx}*/}
          {/*              </Button>*/}
          {/*            );*/}
          {/*          })}*/}
          {/*        </Box>*/}
          {/*        <SliderButton*/}
          {/*          size="xs"*/}
          {/*          icon={Icons.Next}*/}
          {/*          disabled={data[params.page - 1]?.length < params.perPage}*/}
          {/*          onClick={() => setParams(prev => ({ ...prev, page: prev?.page + 1 }))}*/}
          {/*        />*/}
          {/*      </Box>*/}
          {/*    )}*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          {/*)}*/}
        </>
      </>
    </CatalogLayoutPage>
  );
};
