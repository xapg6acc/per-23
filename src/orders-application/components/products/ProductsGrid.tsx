import Image from 'next/image';
import { JSXElementConstructor, ReactElement, ReactNode, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IconButton, Box, Typography, CircularProgress, Backdrop } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Product, ProductPrice } from '../../types';
import { ProductEnum, statusMap } from '../../constants';
import { useApplication, useGetProducts } from '../../hooks';

type Columns = GridColDef & {
  width: number;
  field: ProductEnum;
  headerName: string;
  // renderCell: ({ row, value }: { row: any; value: any }) => ReactElement | ReactNode | Record<any, any>;
  sortable?: boolean;
}

export const ProductsGrid = () => {
  const { data = [] as Product[], isLoading } = useGetProducts();
  const { currency, locale, updateContextOrder, isInCurrentOrder } = useApplication();
  const { t } = useTranslation('orders');

  // : GridColDef[]
  const columns: Columns[] = useMemo(
    () => [
      {
        width: 160,
        field: ProductEnum.AddToOrder,
        headerName: t(`product.${ProductEnum.AddToOrder}`),
        renderCell: ({ row }) => (
          <IconButton sx={{ mx: 'auto' }} onClick={() => updateContextOrder(row)}>
            {
              <AddCircleIcon
                sx={{
                  fill: ({ palette }) => (isInCurrentOrder(row) ? palette.error.main : palette.green[100]),
                  transform: isInCurrentOrder(row) ? 'rotate(45deg)' : '',
                  transition: 'transform 300ms',
                }}
              />
            }
          </IconButton>
        ),
        sortable: false,
      },
      {
        width: 60,
        field: ProductEnum.Id,
        headerName: t(`product.${ProductEnum.Id}`),
      },
      {
        width: 130,
        field: ProductEnum.SerialNumber,
        headerName: t(`product.${ProductEnum.SerialNumber}`),
      },
      {
        width: 100,
        field: ProductEnum.IsNew,
        headerName: t(`product.${ProductEnum.IsNew}`),
        renderCell: ({ value }) => (
          <Box key={value} color={statusMap[value].color}>
            {value}
          </Box>
        ),
      },
      {
        width: 80,
        field: ProductEnum.Photo,
        headerName: t(`product.${ProductEnum.Photo}`),
        renderCell: ({ value }) => (
          <Image src={'/' + value} alt="photo" height={50} width={60} style={{ borderRadius: 5 }} />
        ),
        sortable: false,
      },
      {
        width: 300,
        field: ProductEnum.Title,
        headerName: t(`product.${ProductEnum.Title}`),
      },
      {
        width: 150,
        field: ProductEnum.Type,
        headerName: t(`product.${ProductEnum.Type}`),
      },
      {
        width: 150,
        field: ProductEnum.Specification,
        headerName: t(`product.${ProductEnum.Specification}`),
      },
      {
        width: 170,
        field: ProductEnum.GuaranteeStart,
        headerName: t(`product.${ProductEnum.GuaranteeStart}`),
      },
      {
        width: 170,
        field: ProductEnum.GuaranteeEnd,
        headerName: t(`product.${ProductEnum.GuaranteeEnd}`),
      },
      {
        width: 150,
        field: ProductEnum.Price,
        headerName: t(`product.${ProductEnum.Price}`),
        renderCell: ({ value }) => {
          return value.find((price: ProductPrice) => price.symbol.toLowerCase() === currency).value + ' ' + currency;
        },
      },
      {
        width: 120,
        field: ProductEnum.Order,
        headerName: t(`product.${ProductEnum.Order}`),
      },
      {
        width: 170,
        field: ProductEnum.Date,
        headerName: t(`product.${ProductEnum.Date}`),
      },
    ],
    [t, isInCurrentOrder],
  );

  const products = useMemo(
    () =>
      data.reduce((acc, product) => {
        acc.push({
          ...product,
          [ProductEnum.GuaranteeStart as string]: product.guarantee?.start || '-',
          [ProductEnum.GuaranteeEnd as string]: product.guarantee?.end || '-',
          [ProductEnum.IsNew as string]: statusMap[product.isNew]?.title || '-',
        });

        return acc;
      }, [] as Product[]),
    [data],
  );

  return (
    <>
      <Typography variant="h2">
        {t('menu.products')} / {data.length}
      </Typography>
      {isLoading ? (
        <Backdrop open>
          <CircularProgress />
        </Backdrop>
      ) : (
        <DataGrid
          localeText={locale}
          rows={products}
          columns={columns}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          sx={{ backgroundColor: 'common.white', mt: 5 }}
        />
      )}
    </>
  );
};
