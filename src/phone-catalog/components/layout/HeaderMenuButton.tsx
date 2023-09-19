import { Button, ButtonProps, Typography } from '@mui/material';

export interface MenuButtonProps extends ButtonProps {
  readonly title: string;
  readonly to: string;
  readonly active?: string;
}

export const MenuButton = ({ title, to, active, ...props }: MenuButtonProps) => {
  return (
    <Button
      {...props}
      variant="text"
      sx={{
        minWidth: 'min-content',
        ':hover': {
          color: 'common.black',
        },
        '::after': {
          content: "' '",
          display: active === to ? 'block' : 'none',
          height: 3,
          width: '100%',
          backgroundColor: 'common.black',
          position: 'absolute',
          bottom: 0,
        },
        position: 'relative',
        h4: {
          color: active === to ? 'common.black' : 'grey.50',
          textDecoration: 'none',
        },
      }}
    >
      <Typography variant="h4">{title}</Typography>
    </Button>
  );
};
