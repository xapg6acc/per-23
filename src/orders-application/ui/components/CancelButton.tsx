import { Button, ButtonProps } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CancelButton = ({ ...props }: ButtonProps) => (
  <Button
    {...props}
    variant="contained"
    sx={{
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: 'grey.400',
      boxShadow: 0,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      px: 2,
      minWidth: 'auto',
    }}
  >
    <ArrowForwardIosIcon />
  </Button>
);
