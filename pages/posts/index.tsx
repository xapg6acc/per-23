import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { PostList } from '@app/post/components/PostList';

const PostListPage: NextPage = () => {
  return (
    <>
      <main>
        <PostList />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default PostListPage;
