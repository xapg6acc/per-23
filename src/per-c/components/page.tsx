import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Backdrop, Box, Button, CircularProgress } from '@mui/material';

import { Ticker } from './ticker';
import { CAccordion } from './accordion';
import { formatCurrency } from '../helpers';
import { Currency } from '../types/currency';
import { MonoCurrency } from './mono-currency';
import { currency } from '../constants/currency';
import { useGetMonoCurrency } from '../hooks/query';

export const PerCPage = () => {
  const { push } = useRouter();

  const { data = [], isLoading } = useGetMonoCurrency();

  const list: Partial<Currency>[] = useMemo(
    () =>
      data.reduce((acc, item: Currency) => {
        const isUah = item?.currencyCodeA === 980 || item?.currencyCodeB === 980;

        if (item?.rateSell || item?.rateBuy) {
          if (isUah) {
            acc.push({
              title: currency[item.currencyCodeA],
              rateSell: formatCurrency(item.rateSell),
              rateBuy: formatCurrency(item.rateBuy),
            });
          } else {
            acc.push({
              title: `${currency[item.currencyCodeB]} to ${currency[item.currencyCodeA]}`,
              rateSell: formatCurrency(item.rateSell, currency[item.currencyCodeB]),
              rateBuy: formatCurrency(item.rateBuy, currency[item.currencyCodeB]),
            });
          }
        }

        return acc;
      }, [] as Partial<Currency>[]),
    [data],
  );

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box p={5}>
        <Button fullWidth variant="outlined" onClick={() => push('/')}>
          back
        </Button>
      </Box>
      {isLoading ? (
        <Backdrop open={isLoading} style={{ zIndex: 99999, color: 'lightgray' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Ticker direction="right">
          {list.map(item => (
            <MonoCurrency key={item.title} item={item} />
          ))}
        </Ticker>
      )}
      <Box mt="auto" bgcolor="lightgray" borderRadius={1}>
        <CAccordion />
      </Box>
    </Box>
  );
};
