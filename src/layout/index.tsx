import { ReactNode, useEffect, useState, useMemo } from 'react';
import {
  AppBar,
  Box,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  MenuItemProps,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Skeleton,
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FunctionsIcon from '@mui/icons-material/Functions';
import LightModeIcon from '@mui/icons-material/LightMode';
import TranslateIcon from '@mui/icons-material/Translate';

import { useGetTest } from '@app/api';
import { ThemeMode } from '@app/constants/theme';
import { ScrollTop } from '@app/layout/scrollTop';
import { Typography, Avatar } from '@app/skeleton';
import { useMode, useGetInitials } from '@app/hooks';
// import { main, getMany } from '@prisma/prisma-script'

const categories = [
  {
    id: 1,
    name: 'Math',
    icon: <FunctionsIcon />,
  },
  {
    id: 2,
    name: 'Language',
    icon: <TranslateIcon />,
  },
  {
    id: 3,
    name: 'Chemistry',
    icon: <ScienceIcon />,
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

const Item = ({ item, active, type = 'category', ...props }: ItemProps) => {
  const initials = useGetInitials(item?.name || '');
  // console.log('getmany',getMany());
  const { data } = useGetTest();
  console.log('test data', data)

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
      <Typography variant="h5">{item?.name}</Typography>
    </MenuItem>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  const { mode } = useMode();
  const [activeItem, setActiveItem] = useState<Item | undefined>();

  const selected = [...teachers, ...categories].find(item => activeItem?.name === item?.name);

  return (
    <>
      <Box id="back-to-top-anchor" />

      <Box display="flex">
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
            <Box display="flex" height={56}>
              <Item disabled item={activeItem} />
            </Box>
          </AppBar>

          <Box position="sticky" top={60}>
            <MenuList sx={{ py: 0 }}>
              {categories.map(item => (
                <Item key={item.name} item={item} active={selected} onClick={() => setActiveItem(item)} />
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
            <Box display="flex" justifyContent="flex-end" p={1}>
              <IconButton>{mode === ThemeMode.Light ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
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

      <AppBar component="footer" position="relative" sx={{ backgroundColor: 'background.paper' }}>
        <Box p={1}>
          <Typography variant="h4">Additional tasks</Typography>
        </Box>
      </AppBar>

      <ScrollTop />
    </>
  );
};
