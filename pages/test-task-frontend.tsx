import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TestTaskFrontend } from '@app/old/test/components/form';

const TestTaskFrontendPage: NextPage = () => <TestTaskFrontend />;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default TestTaskFrontendPage;
