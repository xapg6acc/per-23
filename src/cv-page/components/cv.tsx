// import produce from 'immer';
import Masonry from '@mui/lab/Masonry';
import { useRouter } from 'next/router';
import { Backdrop, Box, Button, CircularProgress, Theme } from '@mui/material';
// import { QueryClient } from '@tanstack/react-query';

import { ActionAreaList } from './area-list';
import { ActionAreaCard } from './area-card';
import { useResumeData, useGetCodeWarsData } from '../hooks/query';

export const CvPage = () => {
  const { back } = useRouter();
  // const queryClient = new QueryClient();

  const { data, isLoading } = useResumeData();
  const { data: codeWarsData, isLoading: isCodeWarsLoading } = useGetCodeWarsData();

  const loading = isLoading || isCodeWarsLoading;

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" maxWidth={1200} p={10} mx="auto">
      {loading ? (
        <Backdrop open={loading} style={{ zIndex: 99999, color: 'lightgray' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <Button variant="outlined" onClick={back}>
            back
          </Button>
          <Box mt={4} mr={-4}>
            <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={4}>
              <ActionAreaCard title="codeWars" item={codeWarsData && codeWarsData.ranks.overall} />
              <ActionAreaList data={data} />
            </Masonry>
          </Box>
        </>
      )}
    </Box>
  );
};
