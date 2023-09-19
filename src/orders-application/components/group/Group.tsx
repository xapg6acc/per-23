import { Box, Divider, Grow, Typography } from '@mui/material';

import { Product } from '../../types';
import { useSearch } from '../../hooks';
import { ProductCard } from '../products/ProductCard';

export interface GroupProps {
  readonly title: string;
  readonly filter: string;
  readonly products: Product[];
}

export const Group = ({ products, title, filter }: GroupProps) => {
  const { includes } = useSearch();

  return (
    <Box>
      <Typography variant="h2">
        {title} / {Object.values(products).length}
      </Typography>
      <Divider sx={{ mt: 2 }} />
      {Object.values(products).map(product => (
        <Grow unmountOnExit in={includes(product, filter)} key={product.id}>
          <Box mt={2}>
            <ProductCard draggable variant="detailed" product={product} />
          </Box>
        </Grow>
      ))}
    </Box>
  );
};
