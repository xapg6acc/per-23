import dynamic from 'next/dynamic';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Cart } from '@app/phone-catalog/components/cart';
// const Cart = dynamic(() => import('@app/phone-catalog/components/cart').then(page => page.Cart), { ssr: false });

const CartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Cart />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default CartPage;
