import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useState, useMemo } from 'react';
// import { useTranslation, Trans } from 'next-i18next;
import { Box, Theme, Button, TextField, IconButton } from '@mui/material';
import RedeemIcon from '@mui/icons-material/Redeem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Svg } from '@app/ui/svg';
import { Badge } from '@app/ui/badge';
import { appConfig } from '@app/old/config';

// const { Badge } = dynamic(() => import('@app/ui/badge'), { ssr: false });

import { MenuButton } from './HeaderMenuButton';
import { useApplication } from '../../hooks/useApplication';

import Logo from '../../images/icons/logo-icon.svg';

const headerList = [
  {
    title: 'home',
    to: '/phone-catalog',
  },
  {
    title: 'phones',
    to: '/phone-catalog/phones',
  },
  {
    title: 'tablets',
    to: '/phone-catalog/tablets',
  },
  {
    title: 'accessories',
    to: '/phone-catalog/accessories',
  },
];

export const CatalogHeader = () => {
  const { push, pathname } = useRouter();
  const { cart, favorite } = useApplication('regular');
  // console.log('state', state);

  const actionsList = useMemo(() => {
    if (appConfig.isServer) {
      return [];
    }

    return [
      {
        to: '/phone-catalog/favorite',
        value: favorite.length || 0,
        Icon: <FavoriteBorderIcon />,
      },
      {
        to: '/phone-catalog/cart',
        value: cart.length || 0,
        Icon: <RedeemIcon />,
      },
    ];
  }, [cart.length, favorite.length]);

  const result = [...headerList, ...actionsList].find(item => item.to === pathname);

  const isCart = pathname === '/phone-catalog/cart';
  const isFavorites = pathname === '/phone-catalog/favorite';

  const [active, setActive] = useState(result?.to);

  const handleClick = useCallback(async (value: string) => {
    setActive(value);

    await push(value);
  }, []);

  return (
    <Box
      display="flex"
      width={1}
      justifyContent="space-between"
      position="fixed"
      top={0}
      zIndex={10}
      sx={{
        backgroundColor: 'common.white',
        boxShadow: ({ palette }: Theme) => `0px 1px 0px ${palette.grey[100]}`,
      }}
    >
      <Box display="flex" gap={8}>
        <Button onClick={() => push('/phone-catalog')}>
          <img src={Logo.src} alt="logo" />
        </Button>
        {headerList.map(item => (
          <MenuButton
            to={item.to}
            active={active}
            key={item.title}
            title={item.title}
            onClick={() => handleClick(item.to)}
          />
        ))}
      </Box>
      <Box display="flex">
        {isFavorites && <TextField variant="outlined" placeholder="Search in favourites... " />}
        {/*{actionsList.map(item => (*/}
        {/*  <Badge to={item.to} key={item.to} active={active} value={item.value} onClick={() => handleClick(item.to)}>*/}
        {/*    /!*<Svg Icon={item.Icon} size={24} />*!/*/}
        {/*    {item.Icon}*/}
        {/*  </Badge>*/}
        {/*))}*/}
        {!isCart && (
          <Badge
            value={favorite.length || 0}
            active={active}
            to="/phone-catalog/favorite"
            onClick={() => handleClick('/phone-catalog/favorite')}
          >
            <FavoriteBorderIcon />
          </Badge>
        )}
        <Badge
          value={cart.length || 0}
          active={active}
          to="/phone-catalog/cart"
          onClick={() => handleClick('/phone-catalog/cart')}
        >
          <RedeemIcon />
        </Badge>
      </Box>
    </Box>
  );
};
