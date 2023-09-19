import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import 'tailwindcss/tailwind.css';

const HomePage: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-black">
      ads
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { ...(await serverSideTranslations('uk')) },
  };
};

export default HomePage;
