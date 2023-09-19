import { Grid } from '@mui/material';

import { PostCard } from './PostCard';
import { useGetPostList, useDeletePost } from '../hooks/query';

export const PostList = () => {
  // todo: update after success
  const { mutateAsync } = useDeletePost();
  const { data: list = [], isLoading, isFetching } = useGetPostList();

  return (
    <Grid container spacing={4}>
      {list.map(post => (
        <Grid key={post.id} item xs={12}>
          <PostCard post={post} isLoading={isFetching || isLoading} deleteOne={mutateAsync} />
        </Grid>
      ))}
    </Grid>
  );
};
