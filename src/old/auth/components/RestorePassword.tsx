import { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Box, Card, Grid } from '@mui/material';

import yup from '@app/old/config/yup';
import { User } from '@app/old/types';
import { useSnack } from '@app/old/ui';
import { Text } from '@app/old/formik';
import { Button } from '@app/old/skeleton';

import { useSignUp } from '../hooks/query';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
});

const initialValues = {
  id: 1,
  name: '',
  email: '',
};

export const CreateUserForm = () => {
  const { snack } = useSnack();
  const { push } = useRouter();
  const { t } = useTranslation();

  const { mutateAsync } = useSignUp();

  const handleSubmit = useCallback(
    async (data: User) => {
      try {
        await mutateAsync(data);

        snack(t('alert:email.200'), 'success');
      } catch (e: any) {
        snack(t(e?.data?.message || ''), 'error');
      } finally {
        await push('/confirm-email');
      }
    },
    [mutateAsync, push, snack, t],
  );

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={500}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {() => (
            <Form>
              <Card sx={{ p: 5 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Text fullWidth variant="outlined" name="name" />
                  </Grid>
                  <Grid item xs={12}>
                    <Text fullWidth variant="outlined" name="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between" gap={2}>
                      <Button fullWidth variant="outlined" onClick={() => push('/forgot-password')}>
                        {t('button:forgotPassword')}
                      </Button>
                      <Button fullWidth type="submit" variant="contained">
                        {t('button:register')}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
