import { ModalProvider } from 'react-modal-hook';
import { ReactNode, Dispatch, SetStateAction } from 'react';
import { Container, Grid, ThemeProvider, Fab, Grow } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';

import { Header } from './header';
import { LeftMenu } from './left-menu';
import { theme } from '../../configs/theme';
import { useScrollTop } from '@app/orders-application/hooks/useScrollTop';

export interface PageLayoutProps {
  readonly children?: ReactNode;
  readonly disableSearch?: boolean;
  readonly onSearch: Dispatch<SetStateAction<string>>;
}

export const PageLayout = ({ children, onSearch, disableSearch }: PageLayoutProps) => {
  const { ref, trigger } = useScrollTop();

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Header onSearch={onSearch} disableSearch={disableSearch} />
        <Grid container>
          <Grid item minWidth={250}>
            <LeftMenu />
          </Grid>

          <Grow in={trigger}>
            <Fab
              aria-label="to-top"
              sx={{
                position: 'fixed',
                right: 20,
                bottom: 20,
                backgroundColor: 'green.300',
                ':hover': { backgroundColor: 'green.100' },
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <NorthIcon />
            </Fab>
          </Grow>

          <Grid
            item
            py={15}
            flex={1}
            ref={ref}
            bgcolor="grey.50"
            minHeight="100vh"
            sx={{ boxShadow: 'inset 10px 0px 14px -10px rgba(0, 0, 0, 0.5)' }}
          >
            <Container>{children}</Container>
          </Grid>
        </Grid>
      </ModalProvider>
    </ThemeProvider>
  );
};
