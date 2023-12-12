import Masonry from '@mui/lab/Masonry';
import { useRouter } from 'next/router';
import { Backdrop, Box, Button, CircularProgress } from '@mui/material';

import { ActionAreaList } from './area-list';
import { ActionAreaCard } from './area-card';
import { useResumeData, useGetCodeWarsData } from '../hooks/query';

// todo: npm install react-pdf

export const CvPage = () => {
  const { back } = useRouter();

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
          <Box display="flex" gap={2}>
            <Button fullWidth variant="outlined" onClick={back}>
              back
            </Button>
            <Button disabled variant="outlined" onClick={back} sx={{ minWidth: 'fit-content' }}>
              download cv
            </Button>
          </Box>
          <Box mt={4} mr={-4}>
            <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={4}>
              <ActionAreaCard title="codeWars" item={codeWarsData && codeWarsData} />
              <ActionAreaList data={data} />
            </Masonry>
          </Box>
        </>
      )}
    </Box>
  );
};
