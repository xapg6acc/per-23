import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Favorite } from '@app/phone-catalog/components/favorite';

const FavoritePage: NextPage = () => {
  return <Favorite />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default FavoritePage;
