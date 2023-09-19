import { ReactNode } from 'react';
import { useSnackbar, VariantType, ProviderContext, SnackbarProvider as MuiSnackbarProvider } from 'notistack';
import { useTranslation } from 'next-i18next';
import { Snackbar as MuiSnackbar, SnackbarProps } from '@mui/material';

// export interface SnackbarProps extends MuiSnackbarProps {
//   // readonly message: string;
//   readonly variant: 'success' | 'error';
// }

// export const useNotification = (message, variant: VariantType) => {
//   const { enqueueSnackbar } = useSnackbar();
//
//   return { [variant]: enqueueSnackbar(message, { variant: variant }) };
// };

// export const Snackbar = ({ message, variant innerVariant }: SnackbarProps) => {
//   const { t } = useTranslation();
//   // const { variant } = useNotification(message, innerVariant);
//
//   return (
//     <>
//       <MuiSnackbar message={message}>{variant}</MuiSnackbar>
//     </>
//   );
// };
//
// export const SnackbarProvider = (children: ReactNode) => {
//   return (
//     <MuiSnackbarProvider>
//       {/*<Snackbar />*/}
//       {children}
//     </MuiSnackbarProvider>
//   );
// };
