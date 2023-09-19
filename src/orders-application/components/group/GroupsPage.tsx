import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { Backdrop, Box, CircularProgress } from '@mui/material';

import { Group } from './Group';
import { Product } from '../../types';
import { ProductTypeEnum } from '../../constants';
import { PageLayout } from '../layout/page-layout';
import { useGetProducts, useSearch } from '../../hooks';

export const GroupsPage = () => {
  const { data = [], isLoading } = useGetProducts();
  const { t } = useTranslation('orders');
  const { setSearchValue, searchValue } = useSearch();

  const result: Record<ProductTypeEnum | string, Product[]> = useMemo(() => {
    return data.reduce((acc: Record<ProductTypeEnum | string, Product[]>, item: Product) => {
      const type = item.type.toLowerCase();

      if (!acc[type]) {
        acc[type] = [];
      }

      acc[type].push(item);

      return acc;
    }, {} as Record<ProductTypeEnum | string, Product[]>);
  }, [data]);

  return (
    <PageLayout onSearch={setSearchValue}>
      {isLoading ? (
        <Backdrop open>
          <CircularProgress />
        </Backdrop>
      ) : (
        <>
          <Group products={result.monitor} title={t('group.monitor')} filter={searchValue} />
          <Box mt={5}>
            <Group products={result.laptop} title={t('group.laptop')} filter={searchValue} />
          </Box>
        </>
      )}
    </PageLayout>
  );
};
