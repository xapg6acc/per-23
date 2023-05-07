import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps, Skeleton } from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {
  readonly isLoading?: boolean;
}

export const Avatar = ({ isLoading, ...props }: AvatarProps) => {
  return isLoading ? <Skeleton variant="circular" animation="wave" /> : <MuiAvatar {...props} />;
};
