import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ForgotPassword } from '@app/old/auth';

const ForgotPasswordPage: NextPage = () => {
  return (
    <>
      <main>
        <ForgotPassword />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default ForgotPasswordPage;
