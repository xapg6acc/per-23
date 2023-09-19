import { ReactElement } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RedeemIcon from '@mui/icons-material/Redeem';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export enum Icons {
  Previous,
  Next,
  Heart,
  Cart,
  Favorite,
  Add,
  Remove,
}

const IconsMap: Record<number, ReactElement> = {
  [Icons.Previous]: <KeyboardArrowLeftIcon />,
  [Icons.Next]: <KeyboardArrowRightIcon />,
  [Icons.Heart]: <FavoriteBorderIcon />,
  [Icons.Cart]: <RedeemIcon />,
  [Icons.Add]: <AddIcon />,
  [Icons.Remove]: <RemoveIcon />,
};

const sizes = {
  xs: 32,
  sm: 40,
  md: 48,
  xl: 60,
};

export interface SliderButtonProps extends Omit<IconButtonProps, 'size'> {
  // readonly onClick: () => void;
  readonly icon: Icons;
  readonly size: 'xs' | 'sm' | 'md' | 'xl';
}

export const SliderButton = ({ icon, onClick, size, ...props }: SliderButtonProps) => {
  return (
    <IconButton
      {...props}
      onClick={onClick}
      sx={{
        width: sizes[size],
        height: sizes[size],
        borderRadius: 0,
        border: '1px solid',
      }}
    >
      {IconsMap[icon]}
    </IconButton>
  );
};
