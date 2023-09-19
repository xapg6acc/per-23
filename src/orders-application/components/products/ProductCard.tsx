import dayjs from 'dayjs';
import Image from 'next/image';
import { useTranslation, Trans } from 'next-i18next';
import { Box, IconButton, Link, Paper, PaperProps, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { appConfig } from '@app/old/config';

import { Product } from '../../types';
import { statusMap } from '../../constants';
import { useApplication, useDeleteModal } from '../../hooks';

export interface ProductCardProps extends Omit<PaperProps, 'variant'> {
  readonly product: Product;
  readonly isEditable?: boolean;
  readonly onDelete?: () => void;
  readonly variant?: 'coming' | 'modal' | 'detailed';
}

export const ProductCard = ({
  product,
  onDelete,
  variant = 'coming',
  isEditable = false,
  ...props
}: ProductCardProps) => {
  const { t } = useTranslation('orders');
  const { updateContextOrder, currency } = useApplication();

  const [showModal] = useDeleteModal({
    onSubmit: () => updateContextOrder(product),
    title: t('order.modalTitle'),
    content: <ProductCard variant="modal" product={product} sx={{ boxShadow: 0 }} />,
  });

  const guarantee = {
    start: dayjs(product.guarantee.start).format(appConfig.format.slashes),
    end: dayjs(product.guarantee.end).format(appConfig.format.slashes),
  };

  return (
    <Paper sx={{ p: 2, overflow: variant === 'detailed' ? 'scroll' : 'visible' }} {...props}>
      <Box display="flex" alignItems="center" sx={variant === 'detailed' ? { width: 'max-content' } : { minWidth: 1 }}>
        <Box height={10} width={10} mr={2} borderRadius="50%" bgcolor={statusMap[product.isNew].color} />
        <Image src={'/' + product.photo} alt={product.title} height={50} width={60} style={{ borderRadius: 3 }} />
        <Box ml={2} minWidth={400}>
          <Link noWrap href="#" fontSize={12} fontWeight={600}>
            {product.title}
          </Link>
          <Typography textTransform="uppercase" fontSize={12} fontWeight={600}>
            {product.specification}
          </Typography>
        </Box>
        {variant === 'detailed' && (
          <Box sx={{ color: statusMap[product.isNew].color }} width={80}>
            {statusMap[product.isNew].title}
          </Box>
        )}
        {variant === 'detailed' && (
          <Box mr={2} width={180}>
            <Typography sx={{ span: { color: 'gray', fontWeight: 600 } }}>
              <Trans>{t('product.guaranteeRange', { start: guarantee.start, end: guarantee.end })}</Trans>
            </Typography>
          </Box>
        )}
        {variant !== 'modal' && (
          <Box width={80}>
            <Typography
              sx={{
                span: { color: 'gray', fontWeight: 600, float: 'right' },
                color: variant === 'detailed' ? 'common.black' : statusMap[product.isNew].color,
              }}
            >
              {t(`status.${statusMap[product.isNew].title}`)}
            </Typography>
          </Box>
        )}
        {variant === 'detailed' && (
          <Box width={150}>
            {product.price.map(price => {
              const smallest = price.symbol.toLowerCase() === currency;

              return (
                <Typography
                  ml={1}
                  key={price.symbol}
                  fontSize={smallest ? 14 : 10}
                  color={smallest ? 'common.black' : 'gray'}
                >
                  <strong>{price.value}</strong> {price.symbol.replace('USD', '$')}
                </Typography>
              );
            })}
          </Box>
        )}
        {variant === 'detailed' && (
          <Box maxWidth={220}>
            <Link href="#" fontSize={14} fontWeight={600}>
              {`${product.type} `.repeat(6)}
            </Link>
          </Box>
        )}
        {variant === 'detailed' && (
          <Box width={200} mr={2}>
            &#8212;
          </Box>
        )}
        {variant === 'detailed' && (
          <Box width={200} mr={2}>
            &#8212;
          </Box>
        )}
        {variant === 'detailed' && (
          <Box maxWidth={220}>
            <Link href="#" fontSize={14} fontWeight={600}>
              {`${product.type} `.repeat(6)}
            </Link>
          </Box>
        )}
        {variant === 'coming' && (
          <Box ml="auto">
            <IconButton disabled={isEditable} onClick={showModal}>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Paper>
  );
};
