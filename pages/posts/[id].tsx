import { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { EditPost as PostItemPage } from '@app/old/post/components/EditPost';

const PostPage: NextPage = () => {
  return (
    <>
      <main>
        <PostItemPage />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default PostPage;
