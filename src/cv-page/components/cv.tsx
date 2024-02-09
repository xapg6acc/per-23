import Masonry from '@mui/lab/Masonry';
import { useRouter } from 'next/router';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Backdrop, Box, Button, CircularProgress } from '@mui/material';

import { CvPdf } from './cv-pdf';
import { ActionAreaList } from './area-list';
import { ActionAreaCard } from './area-card';
import { useResumeData, useGetCodeWarsData } from '../hooks/query';

export const CvPage = () => {
  const { push } = useRouter();

  const { data, isLoading } = useResumeData();
  const { data: codeWarsData, isLoading: isCodeWarsLoading } = useGetCodeWarsData();

  const loading = isLoading || isCodeWarsLoading;

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" maxWidth={1200} p={{ xs: 2, md: 10 }} mx="auto">
      {loading ? (
        <Backdrop open={loading} style={{ zIndex: 99999, color: 'lightgray' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <Box display="flex" gap={2}>
            <Button fullWidth variant="outlined" onClick={() => push('/')}>
              back
            </Button>
            <PDFDownloadLink document={<CvPdf data={data} codeWarsData={codeWarsData} />} fileName="Ivan_Boiko_CV.pdf">
              {({ loading }) => (
                <Button disabled={loading} variant="outlined" sx={{ whiteSpace: 'nowrap' }}>
                  {loading ? 'preparing' : 'download'} cv
                </Button>
              )}
            </PDFDownloadLink>
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
