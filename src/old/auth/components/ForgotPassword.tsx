import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Box, Card, Grid } from '@mui/material';

import yup from '@app/old/config/yup';
import { useSnack } from '@app/old/ui';
import { Text } from '@app/old/formik';
import { Button } from '@app/old/skeleton';

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
});

const initialValues = {
  email: '',
};

export const ForgotPassword = () => {
  const { push, back } = useRouter();
  const { t } = useTranslation();
  const { snack } = useSnack();

  const handleSubmit = () => {
    snack(t('alert:email.confirm'), 'info')
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={500}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {() => (
            <Form>
              <Card sx={{ p: 5 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Text fullWidth variant="outlined" name="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between" gap={2}>
                      <Button fullWidth variant="outlined" onClick={back}>
                        {t('button:back')}
                      </Button>
                      <Button fullWidth type="submit" variant="contained">
                        {t('button:restore')}
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
