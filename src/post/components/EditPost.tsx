import { useMemo } from 'react';
import { Form, Formik, Field } from 'formik';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { useTranslation } from 'next-i18next';

import yup from '@config/yup';
import { useSnack } from '@ui';
import { Post } from '@types';
import { Edit } from '@app/formik';
import { Typography } from '@skeleton';

import { useUpdatePost } from '../hooks/query';

export interface EditPostProps {
  readonly post?: Post;
}

export const EditPost = ({ post }: EditPostProps) => {
  const { snack } = useSnack();
  const { query } = useRouter();
  const { t } = useTranslation();
  // @ts-ignore
  const { mutate } = useUpdatePost(query.id);
  console.log(post);

  // @ts-ignore
  const initialValues: Post = useMemo(
    () => ({
      id: Number(post?.id),
      title: String(post?.title),
      content: String(post?.content),
      published: Boolean(post?.published),
      authorId: Number(post?.authorId),
      createdAt: post?.createdAt,
    }),
    [post],
  );

  const handleSubmit = (data: Post) => {
    try {
      console.log('data', data);
      mutate(data);
      snack(t('alert:post.created'), 'success');
    } catch (e) {
      snack(t('alert:post.created'), 'error');
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, ...rest }) => (
        <Form>
          <Field name="title" component={Edit} />
          {/*<Edit name="content">*/}
          {/*  <Typography>{values.content}</Typography>*/}
          {/*</Edit>*/}
          <Button type="submit">save</Button>
        </Form>
      )}
    </Formik>
  );
};
