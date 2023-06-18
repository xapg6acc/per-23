import { ReactNode, useMemo } from 'react';
import { Grow, Box } from '@mui/material';

import { Typography } from '@skeleton';

export interface ListItem {
  delay?: number;
  value: number | string;
}

export interface ListProps {
  readonly children?: ReactNode;
  readonly isLoading?: boolean;
  readonly list: ListItem[];
}

export const List = ({ list, isLoading }: ListProps) => {
  const staleDelay = 500;
  const newDelay = (value: number) => {
    return (value || 0) + staleDelay;
  };
  const result = useMemo(() => {
    const innerList: ListItem[] = [];

    list.forEach((item, index) => {
      // console.log(index, item);
      innerList.reduce((acc, item) => {
        console.log(acc);

        return acc;
      }, {})
      if (!!index) {
        // innerList.push({ value: item.value, delay: newDelay(Number(item.delay)) || 0 });
      }
    });

    return innerList;
  }, [list]);

  // console.log(result);

  return (
    <>
      {/*{result.map(([key, item]) => {*/}
      {/*  console.log({ key, item });*/}

      {/*  return (*/}
      {/*    <Grow key={item.value} in={!isLoading} {...(!isLoading ? { timeout: item.delay } : {})}>*/}
      {/*      <Box>{item.value}</Box>*/}
      {/*    </Grow>*/}
      {/*  );*/}
      {/*})}*/}
    </>
  );
};
