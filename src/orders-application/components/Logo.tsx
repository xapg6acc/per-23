import { Box, ButtonBase, ButtonBaseProps, Typography } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTranslation } from "next-i18next";

export const Logo = ({ onClick }: ButtonBaseProps) => {
  const { t } = useTranslation('orders');

  return (
    <ButtonBase onClick={onClick} sx={{ p: 1 }}>
      <Box display="flex" alignItems="center" minWidth={180}>
        <Box position="relative">
          <ShieldIcon sx={{ fontSize: 32, fill: ({ palette }) => palette.green[100] }} />
          <AccountCircleIcon
            sx={{
              fontSize: 20,
              fill: ({ palette }) => palette.common.white,

              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Typography variant="h3" color="green.100" ml={2} textTransform="uppercase">
          {t('inventory')}
        </Typography>
      </Box>
    </ButtonBase>
  );
};
