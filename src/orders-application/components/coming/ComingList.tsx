import { Grid, Grow } from '@mui/material';

import { Order } from '../../types';
import { useSearch } from '../../hooks';
import { ComingCard } from './ComingCard';

export interface ComingListProps {
  readonly orders: Order[];
  readonly filter: string;
  readonly active: Order | null | undefined;
  readonly onClick: (value: Order | null | undefined) => void;
}

export const ComingList = ({ orders, active, onClick, filter }: ComingListProps) => {
  const { includes } = useSearch();

  console.log(orders);
  return (
    <Grid container spacing={2}>
      {Object.values(orders).map(order => (
        <Grow unmountOnExit in={includes(order, filter)} key={order.id}>
          <Grid item xs={12}>
            <ComingCard filter={filter} active={active} order={order} onClick={onClick} count={order?.order?.length} />
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
};
