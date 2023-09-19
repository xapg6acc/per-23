import { ReactNode } from 'react';
import { Box, Typography, IconButton, Badge as MuiBadge, BoxProps } from '@mui/material';

export interface BadgeProps extends BoxProps {
  readonly to: string;
  readonly active?: string;
  readonly value: ReactNode;
  readonly children: ReactNode;
  readonly onClick: () => void;
}

export const Badge = ({ value, children, active, to, onClick, ...props }: BadgeProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      sx={{
        borderLeft: theme => `1px solid ${theme.palette.grey[100]}`,
        '::after': {
          content: "' '",
          display: active === to ? 'block' : 'none',
          height: 3,
          width: '100%',
          backgroundColor: 'common.black',
          position: 'absolute',
          bottom: 0,
        },
      }}
      {...props}
    >
      <IconButton sx={{ p: 3, borderRadius: 0 }} onClick={onClick}>
        <MuiBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          badgeContent={
            <Typography fontSize={10} sx={{ m: 0 }}>
              {value}
            </Typography>
          }
          color="error"
          sx={{
            p: 0,
            '.MuiBadge-badge': {
              textAlign: 'center',
              p: 0,
              height: 16,
              minWidth: 16,
              top: 0,
              right: 0,
            },
          }}
        >
          {children}
        </MuiBadge>
      </IconButton>
    </Box>
  );
};
