import { useTranslation } from 'next-i18next';
import { useCallback, useState, useMemo } from 'react';
import { Backdrop, CircularProgress, Divider, Grid, Grow, Typography } from '@mui/material';

import { ComingList } from './ComingList';
import { Order, Product } from '../../types';
import { PageLayout } from '../layout/page-layout';
import { OrderComingPageContainer } from '../order/OrderComingContainer';
import { useApplication, useGetProducts, useGetOrders, useSearch } from '../../hooks';

export const ComingPage = () => {
  const { t } = useTranslation('orders');
  const { data = [], isLoading } = useGetProducts();
  const { currency, contextOrder } = useApplication();
  const { setSearchValue, searchValue: filter, includes } = useSearch();
  const { data: ordersData = [] as Order[], isLoading: isLoadingOrders } = useGetOrders();

  const result: Order[] = useMemo(() => {
    return ordersData.map(item => {
      const order = data.filter(product => product.order === item.id) || [];
      const totalAmount = order.reduce((acc, product) => {
        const amount = product.price.find(price => price.symbol.toLowerCase() === currency);

        if (amount) {
          acc += amount.value || 0;
        }

        return acc;
      }, 0);

      return {
        ...item,
        order: order || [],
        totalAmount: totalAmount || 0,
      };
    });
  }, [ordersData, data, currency]);

  const [active, setActive] = useState<Order | null | undefined>();

  const handleClick = useCallback(
    (value: Order | null | undefined) => setActive(() => (value && active && value.id === active.id ? null : value)),
    [active],
  );

  const ordersList = [...result, contextOrder] as Order[];
  const activeOrderContainer = ordersList.find(item => item?.id === active?.id);

  return (
    <PageLayout onSearch={setSearchValue}>
      {isLoading || isLoadingOrders ? (
        <Backdrop open>
          <CircularProgress />
        </Backdrop>
      ) : (
        <>
          <Typography variant="h2">
            {t('menu.coming')} / {ordersList.length}
          </Typography>
          <Divider orientation="horizontal" sx={{ mt: 2 }} />
          <Grid container mt={0.25} spacing={2}>
            <Grid item xs={!!active ? 4.5 : 12} sx={{ transition: 'all 300ms' }}>
              <ComingList active={active} filter={filter} orders={ordersList} onClick={handleClick} />
            </Grid>
            {activeOrderContainer && (
              <Grow
                unmountOnExit
                in={includes(activeOrderContainer, filter)}
                style={{ transitionDelay: !!active ? '300ms' : '-300ms' }}
              >
                <Grid item xs={7.5}>
                  <OrderComingPageContainer product={activeOrderContainer} onClose={handleClick} />
                </Grid>
              </Grow>
            )}
          </Grid>
        </>
      )}
    </PageLayout>
  );
};
