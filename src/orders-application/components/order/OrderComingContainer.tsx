import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Paper, Button, Divider, Typography, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Product, Order } from '../../types';
import { ProductCard } from '../products/ProductCard';

export interface OrderComingPageContainerProps {
  readonly product: Order | null | undefined;
  readonly onClose: (value: Order | null) => void;
}

export const OrderComingPageContainer = ({ product, onClose }: OrderComingPageContainerProps) => {
  const { push } = useRouter();
  const { t } = useTranslation('orders');

  const contextObject = product?.id !== 4;

  return (
    <Paper sx={{ p: 2, position: 'relative' }}>
      <Typography variant="h3">{product?.title}</Typography>
      <Button
        disabled={contextObject}
        onClick={() => push('/orders-application/products')}
        startIcon={
          <AddCircleIcon sx={{ fill: ({ palette }) => (contextObject ? palette.grey[100] : palette.green[100]) }} />
        }
        sx={{ textTransform: 'initial', color: 'green.100', mt: 1 }}
      >
        {t('general.button.addMore')}
      </Button>

      <Stack mt={2} direction="column" divider={<Divider orientation="horizontal" />} spacing={2}>
        {product?.order?.map(product => (
          <ProductCard draggable product={product} sx={{ boxShadow: 0 }} isEditable={contextObject} key={product.id} />
        ))}
      </Stack>
      <IconButton
        onClick={() => onClose(null)}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,

          boxShadow: 1,
          backgroundColor: 'common.white',
          transform: 'translate(50%, -50%)',
        }}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};
