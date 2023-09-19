import dayjs from 'dayjs';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { Card, CardHeader, CardContent, IconButton, Avatar, Skeleton, InputBase, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import { Post } from '@app/old/types';
import { Typography } from '@app/old/skeleton';
import { appConfig } from '@app/old/config/config';
import { useSnack } from '@app/old/ui';
import { Belgrano } from "next/dist/compiled/@next/font/dist/google";

interface PostCardProps {
  readonly post: Post;
  readonly isLoading: boolean;
  readonly deleteOne: (post: Post) => void;
}

export const PostCard = ({ post, isLoading, deleteOne }: PostCardProps) => {
  const { snack } = useSnack();
  const { push } = useRouter();
  const { t } = useTranslation();

  const initialValues = useMemo(
    () => ({
      title: post.title,
      content: post.content,
      published: post.published,
    }),
    [post.title, post.content, post.published],
  );

  const createdAt = dayjs(post.createdAt).format(appConfig.format.longDate);

  const handleDeleteOne = useCallback(async () => {
    try {
      // await deleteOne(post.id);
      snack(t('alert:post.delete.success'), 'success');
    } catch (e) {
      // @ts-ignore
      snack(t(e?.data?.message || e?.statusText || ''), 'error');
    }
  }, [t, post.id]);

  const handleEditOne = () => {
    console.log('submit');
    // console.log('edit');
  };

  const handleSubmit = () => {
    handleEditOne();

  };

  return isLoading ? (
    <Skeleton height={100} width="100%" />
  ) : (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ backgroundColor: 'background.default' }} aria-label="recipe">
                  ?
                </Avatar>
              }
              action={
                <>
                  <Tooltip title={t(`head:`)}>
                    <IconButton aria-label="settings" onClick={handleEditOne}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <IconButton aria-label="settings" onClick={handleDeleteOne}>
                    <CloseIcon />
                  </IconButton>
                </>
              }
              title={
                <InputBase
                  placeholder={post.title}
                  inputProps={{
                    sx: {
                      placeholder: {
                        color: 'red',
                      },
                    },
                  }}
                />
              }
              subheader={createdAt}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" whiteSpace="pre-line">
                {post.content}
              </Typography>
            </CardContent>
          </Card>
        </Form>
      )}
    </Formik>
  );
};
