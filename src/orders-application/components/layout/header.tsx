import { useTranslation } from 'next-i18next';
import { Dispatch, SetStateAction } from 'react';
import { AppBar, Box, Grid, TextField, Toolbar, Slide } from '@mui/material';

import { Logo } from '../Logo';
import { RealTimeClock } from '../Clock';

export interface HeaderProps {
  readonly disableSearch?: boolean;
  readonly onSearch: Dispatch<SetStateAction<string>>;
}

export const Header = ({ onSearch, disableSearch = false }: HeaderProps) => {
  const { t } = useTranslation('orders');

  return (
    <AppBar component="header" color="inherit">
      <Toolbar>
        <Grid container justifyContent="space-between" maxWidth={1280} mx="auto">
          <Grid item display="flex" alignItems="center">
            <Logo />
            <Slide unmountOnExit in={!disableSearch}>
              <Box ml={10} width={300}>
                <TextField
                  fullWidth
                  size="small"
                  defaultValue=""
                  variant="outlined"
                  autoComplete="off"
                  role="presentation"
                  placeholder={t('general.search') || ''}
                  onChange={e => onSearch(e.target.value)}
                />
              </Box>
            </Slide>
          </Grid>
          <Grid item xs={1.75}>
            <RealTimeClock />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
