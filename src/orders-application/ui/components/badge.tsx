import { Avatar, AvatarProps, Badge as MuiBadge, IconButton, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export interface BadgeAvatarProps extends AvatarProps {}

export const BadgeAvatar = ({ onClick, ...props }: BadgeAvatarProps) => {
  return (
    <MuiBadge
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
       // @ts-ignore
      badgeContent={
       // @ts-ignore
        <IconButton onClick={onClick} sx={{ backgroundColor: 'common.white', boxShadow: 1 }}>
          <SettingsIcon />
        </IconButton>
      }
      overlap="circular"
    >
      <Avatar {...props} sx={{ height: 100, width: 100 }} />
    </MuiBadge>
  );
};
