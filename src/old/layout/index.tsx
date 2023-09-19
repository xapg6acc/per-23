import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ReactNode, useEffect, useState, useMemo, useRef } from 'react';
import { AppBar, Box, IconButton, MenuItem, MenuList, MenuItemProps, Tooltip, Skeleton } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ScienceIcon from '@mui/icons-material/Science';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FunctionsIcon from '@mui/icons-material/Functions';
import LightModeIcon from '@mui/icons-material/LightMode';
import TranslateIcon from '@mui/icons-material/Translate';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

import { ThemeMode } from '@app/old/constants/theme';
import { ScrollTop } from '@app/old/layout/scrollTop';
import { Typography, Avatar } from '@app/old/skeleton';
import { useThemeMode, useGetInitials } from '@app/old/hooks';

const categories = [
  {
    id: 1,
    to: '/test-task-frontend',
    name: 'Test Task Frontend',
    icon: <QuizIcon />,
    loading: false,
  },
  {
    id: 1,
    to: '/',
    name: 'Math',
    icon: <FunctionsIcon />,
    loading: true,
  },
  {
    id: 2,
    to: '/',
    name: 'Language',
    icon: <TranslateIcon />,
    loading: true,
  },
  {
    id: 3,
    to: '/',
    name: 'Chemistry',
    icon: <ScienceIcon />,
    loading: true,
  },
];
const teachers = [
  {
    id: 1,
    name: 'John Doe',
    icon: 'JD',
  },
  {
    id: 2,
    name: 'Larry Doe',
    icon: 'LD',
  },
  {
    id: 3,
    name: 'Johny Doe',
    icon: 'JD',
  },
  {
    id: 4,
    name: 'Jake Doe',
    icon: 'JD',
  },
  {
    id: 5,
    name: 'Jeremy Doe',
    icon: 'JD',
  },
];
const colors = [
  'primary.main',
  'background.default',
  'background.paper',
  'secondary.main',
  'secondary.contrastText',
  'error.main',
  'warning.main',
  'success.main',
];

export interface ItemProps extends MenuItemProps {
  readonly item?: Item;
  readonly active?: Item;
  readonly type?: 'user' | 'category';
  readonly isLoading?: boolean;
}

interface Item {
  readonly id: number;
  readonly name: string;
  readonly icon: ReactNode;
  readonly avatar?: string;
}

export interface LayoutProps {
  readonly children?: ReactNode;
  readonly active?: Item;
}

const Item = ({ item, active, type = 'category', isLoading = true, ...props }: ItemProps) => {
  const initials = useGetInitials(item?.name || '');

  return (
    <MenuItem
      sx={{
        gap: 1,
        display: 'flex',
        alignItems: 'center',
        // color: active?.name === item?.name ? 'secondary.main' : 'secondary.contrastText',
        // ':hover': { color: 'secondary.main', '.MuiAvatar-root': { backgroundColor: 'secondary.main' } },
      }}
      {...props}
    >
      {type === 'user' ? (
        <Avatar
          sx={{
            height: 24,
            width: 24,
            fontSize: 12,
            // backgroundColor: [
            //   props.disabled ? 'secondary.contrastText' : 'primary.main',
            //   active?.name === item?.name ? 'secondary.main' : 'primary.main',
            // ],
          }}
        >
          {initials}
        </Avatar>
      ) : (
        item?.icon
      )}
      <Typography isLoading={isLoading} variant="h5">
        {item?.name}
      </Typography>
    </MenuItem>
  );
};

export interface HeaderAction {
  readonly id: string;
  readonly path?: string;
  readonly icon: ReactNode;
  readonly visible: boolean;
  readonly onClick?: () => void;
}

export const Layout = ({ children }: LayoutProps) => {
  const { push, pathname } = useRouter();
  const { t } = useTranslation();
  const [layoutHeight, setLayoutHeight] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<Item | undefined>();
  const head = pathname.replace('/', '');
  const { mode, toggleMode } = useThemeMode();

  // @ts-ignore
  const headerActionList: HeaderAction[] = useMemo(
    () => [
      {
        id: 'post-list',
        path: '/posts',
        icon: <ListAltIcon />,
        visible: true,
      },
      {
        id: 'create-post',
        path: '/posts/create',
        icon: <PostAddIcon />,
        visible: true,
      },
      { id: 'plural', path: '/plural', icon: <TranslateIcon />, visible: true },
      { id: 'cart', path: '/cart', icon: <ShoppingCartIcon />, visible: true },
      { id: 'favorite', path: '/favorite', icon: <FavoriteIcon />, visible: true },
      { id: 'sign-up', path: '/sign-up', icon: <AccountCircleIcon />, visible: true },
      {
        id: 'theme/mode',
        onClick: toggleMode,
        icon: mode === ThemeMode.Dark ? <DarkModeIcon /> : <LightModeIcon />,
        visible: true,
      },
    ],
    [toggleMode, mode],
  );

  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      setLayoutHeight(footerRef.current.getBoundingClientRect().height);
    }
  }, []);

  const selected = [...teachers, ...categories].find(item => activeItem?.name === item?.name);

  return (
    <>
      <Box id="back-to-top-anchor" />
      <Head>
        <title>{t(`head:${head}`)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" minHeight={`calc(100vh - ${layoutHeight}px)`}>
        <Box width={300}>
          <AppBar
            component="header"
            position="sticky"
            sx={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 56,
              backgroundColor: 'background.paper',
              backdropFilter: 'blur(4px)',
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center" height={56}>
              <EmojiFoodBeverageIcon sx={{ height: 50, width: 50, fill: theme => theme.palette.primary.main }} />
            </Box>
          </AppBar>

          <Box position="sticky" top={60}>
            <MenuList sx={{ py: 0 }}>
              {categories.map(item => (
                <Item
                  key={item.name}
                  item={item}
                  active={selected}
                  isLoading={item.loading}
                  onClick={() => push(item.to)}
                />
              ))}
            </MenuList>
            <Skeleton height={5} animation="wave" />
            <MenuList sx={{ py: 0 }}>
              {teachers.map(item => (
                <Item type="user" key={item.name} item={item} active={selected} onClick={() => setActiveItem(item)} />
              ))}
            </MenuList>
          </Box>
        </Box>

        <Box width={1}>
          <AppBar
            component="header"
            position="sticky"
            sx={{ top: 0, backgroundColor: 'background.paper', backdropFilter: 'blur(4px)' }}
          >
            <Box display="flex" justifyContent="flex-end" p={1} gap={2}>
              {headerActionList
                .filter(item => item.visible)
                .map(item => (
                  <Tooltip key={item.id} title={t(`head:${item.id}`)}>
                    {/* @ts-ignore */}
                    <IconButton onClick={() => (item.onClick ? item.onClick() : push(item?.path))}>
                      {item.icon}
                    </IconButton>
                  </Tooltip>
                ))}
            </Box>
          </AppBar>

          <Box display="flex">
            <Box p={7.5} width={1}>
              {children}
            </Box>
            <Box px={2} minWidth={300}>
              <Typography isLoading fontWeight={600}>
                application settings
              </Typography>
              <Typography>color</Typography>
              <Typography fontWeight={600}>section 2</Typography>
              <Typography>color</Typography>
              <Typography fontWeight={600}>section 3</Typography>
              <Typography>color</Typography>
              <Skeleton height={50} animation="wave" />
              <Box display="flex" flexDirection="column" bgcolor="white">
                {colors.map(color => (
                  <Box
                    key={color}
                    height={40}
                    width={1}
                    bgcolor={color}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {color}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <AppBar ref={footerRef} component="footer" position="relative" sx={{ backgroundColor: 'background.paper' }}>
        <Box p={1}>
          <Typography variant="h4">
            Additional tasks ({t('pageCount', { count: 1, ns: 'plural' })}) | {t('button.save')}
          </Typography>
        </Box>
      </AppBar>

      <ScrollTop />
    </>
  );
};
