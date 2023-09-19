import Head from 'next/head';
import { useTranslation } from "next-i18next";
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ProductsPage as Products } from '@app/orders-application/components/products/ProductsPage';

const ProductsPage: NextPage = () => {
  const { t } = useTranslation('orders');

  return (
    <>
      <Head>
        <title>{t('menu.products')}</title>
      </Head>
      <Products />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale || 'uk', ['orders'])) },
  };
};

export default ProductsPage;
