import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Card, Grid } from '@mui/material';

import yup from '@app/old/config/yup';
import { Post } from '@app/old/types';
import { useSnack } from '@app/old/ui';
import { Text } from '@app/old/formik';
import { Button } from '@app/old/skeleton';

import { useCreatePost } from '../hooks/query';

const validationSchema = yup.object().shape({
  id: yup.number().required(),
  title: yup.string().required(),
  content: yup.string().required(),
  published: yup.boolean(),
  authorId: yup.number(),
});

export const CreatePostForm = () => {
  const { snack } = useSnack();
  const { push } = useRouter();
  const { t } = useTranslation();

  // todo: frontend must exist only title and content fields
  const initialValues: Partial<Post> = {
    id: 1,
    title: '',
    content: '',
    published: false,
    authorId: 80,
    createdAt: new Date(),
  };

  const { mutateAsync } = useCreatePost();

  const handleSubmit = useCallback(
    // @ts-ignore
    async (data, { resetForm }) => {
      try {
        await mutateAsync(data);
        // await resetForm();
        snack(t('alert:post.created'), 'success');
      } catch (e) {
        // @ts-ignore
        snack(t(e?.data?.message || ''), 'error');
      }
    },
    [mutateAsync, snack, t],
  );

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={500}>
        <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ resetForm }) => (
            <Form>
              <Card sx={{ p: 5 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Text fullWidth variant="outlined" name="id" />
                  </Grid>
                  <Grid item xs={12}>
                    <Text fullWidth variant="outlined" name="title" />
                  </Grid>
                  <Grid item xs={12}>
                    <Text fullWidth multiline minRows={4} variant="outlined" name="content" label={t('form:placeholder.postContent')} />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between" gap={2}>
                      <Button fullWidth variant="outlined" onClick={() => resetForm()}>
                        {t('button:clearForm')}
                      </Button>
                      <Button fullWidth type="submit" variant="contained">
                        {t('button:createPost')}
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
