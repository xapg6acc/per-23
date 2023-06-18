import { useSnackbar, VariantType } from 'notistack';

export const useSnack = () => {
  const { enqueueSnackbar } = useSnackbar();

  return {
    snack: (message: string, variant: VariantType) =>
      enqueueSnackbar(message, {
        variant,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      }),
  };
};
