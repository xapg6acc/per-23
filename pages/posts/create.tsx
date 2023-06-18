import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { CreatePostForm } from '@app/post/components/CreatePostForm';

const CreatePostFormPage: NextPage = () => {
  return (
    <>
      <main>
        <CreatePostForm />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default CreatePostFormPage;
