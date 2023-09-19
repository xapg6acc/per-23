import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { BadgeAvatar } from '../../ui/components/badge';

const list = ['coming', 'groups', 'products', 'users', 'settings'];

export const LeftMenu = () => {
  const { push, pathname } = useRouter();
  const { t } = useTranslation('orders');

  const active = useMemo(() => list.find(item => pathname.includes(item)), [pathname]);

  return (
    <Box px={5} display="flex" flexDirection="column" alignItems="center" position="sticky" top={120}>
      <BadgeAvatar />
      <Box mt={2}>
        <List>
          {list.map(item => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                alignItems="center"
                selected={item === active}
                disabled={item === 'users'}
                onClick={() => push(`/orders-application/${item}`)}
                sx={{
                  textAlign: 'center',
                  '&.Mui-selected': {
                    backgroundColor: 'inherit',
                  },
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    mx: 'auto',
                    width: item === active ? 1 : 0,

                    height: 3,
                    backgroundColor: 'green.100',

                    // transition: 'width 300ms',
                  },
                }}
              >
                <ListItemText primary={t(`menu.${item}`)} sx={{ textAlign: 'center', textTransform: 'uppercase' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
