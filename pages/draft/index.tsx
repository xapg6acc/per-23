import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PerCPage } from '@app/per-c/components/page';
import image from '@app/home-page/images/Rioters-New-York-Tribune-offices-Republican-Draft-1863.webp';

const PerPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Drafts Page</title>
        <meta property="og:title" content="lorem ipsum" />
        <meta property="og:description" content="draft components (dolor sin amet)" />
        <meta property="og:image" content={image.src} />
      </Head>
      <main>
        <PerCPage />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default PerPage;
