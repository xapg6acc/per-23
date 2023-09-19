import type { NextPage, GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Device } from '@app/phone-catalog/components/device';

const DevicePage: NextPage = () => {
  return (
    <>
      <Device />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      ...(await serverSideTranslations('uk')),
    },
  };
};

export default DevicePage;
