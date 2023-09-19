import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { appConfig } from '@app/old/config';

export const RealTimeClock = () => {
  const [current, setCurrent] = useState(dayjs());
  const { t } = useTranslation('orders');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(dayjs());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const day = current.format(appConfig.format.current.day);

  return (
    <Box>
      <Typography>{t(`general.day.${day}`)}</Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography textTransform="uppercase">{current.format(appConfig.format.current.date)}</Typography>
        <AccessTimeIcon sx={{ fill: ({ palette }) => palette.green[100] }} />
        <Typography>{current.format(appConfig.format.current.time)}</Typography>
      </Box>
    </Box>
  );
};
