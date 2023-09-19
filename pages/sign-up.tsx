import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { CreateUserForm } from '@app/old/auth';

interface Data {
  code: number;
  message: string;
}

interface Request<T> extends Data {
  data: T;
}

export interface ApiError {
  data: Data;
  status: string;
  statusText: string;
}

const SignUpPage: NextPage = () => {
  return (
    <>
      <main>
        <CreateUserForm />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default SignUpPage;
