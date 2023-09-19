import dayjs from 'dayjs';
import { useTranslation, Trans } from 'next-i18next';
import { Box, Grid, IconButton, Link, Paper, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { appConfig } from '@app/old/config';

import { Order } from '../../types';
import { useApplication, useDeleteModal } from '../../hooks';
import { CancelButton } from '../../ui/components/CancelButton';

export interface ProductCardProps {
  readonly order: Order;
  readonly count: number;
  readonly filter: string;
  readonly active: Order | null | undefined;
  readonly onClick: (value: Order | null | undefined) => void;
}

export const ComingCard = ({ order, active, onClick, count, filter }: ProductCardProps) => {
  const { t } = useTranslation('orders');
  const { currency, deleteContextOrder, deleteCachedOrder } = useApplication();

  const [showModal, closeModal] = useDeleteModal({
    title: t('product.modal.deleteTitle', { title: order.title }),
    content: t('product.modal.deleteContent', { count: order.order.length }),
    onSubmit:
      order.id === 4
        ? () => {
            closeModal();
            deleteContextOrder();
          }
        : () => deleteCachedOrder(order),
  });

  const date = dayjs(order.date).format(appConfig.format.slashes);

  return (
    <Paper sx={{ p: 2, position: 'relative' }}>
      <Grid container alignItems="center" spacing={2}>
        {!active && (
          <Grid item xs={5}>
            <Link href="#" whiteSpace="nowrap">
              {order?.title}
            </Link>
          </Grid>
        )}
        <Grid item xs={!!active ? 8.5 : 7} display="flex" justifyContent="space-between">
          <Box display="flex">
            <IconButton sx={{ border: '1px solid', borderColor: 'grey.50', mr: 2 }} onClick={() => onClick(order)}>
              <ListIcon />
            </IconButton>
            <Trans>
              <Typography width="min-content" textTransform="capitalize">
                {t('productsCount', { count })}
              </Typography>
            </Trans>
          </Box>
          <Box textAlign="center">
            <Typography>12 / 12</Typography>
            <Typography>{date}</Typography>
          </Box>
          {!active && (
            <>
              <Box my="auto" textAlign="center">
                <Typography textTransform="uppercase">{`${order.totalAmount} ${currency}`}</Typography>
              </Box>
              <IconButton disabled={order?.order?.length === 0} onClick={showModal}>
                <DeleteOutlineIcon />
              </IconButton>
            </>
          )}
        </Grid>
        {active?.id === order?.id && (
          <Grid item xs={1}>
            <CancelButton onClick={() => onClick(order)} />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};
