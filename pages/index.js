import { useContext, useEffect } from 'react';
import Head from 'next/head';

import { MainContext } from '../context/mainContext';
import WelcomeHome from '../components/Welcome';
import SkillSet from '../components/SkillSet';
import Marquee from '../components/Marquee';
import Contact from '../components/Contact';
import api from '../utils/api';

import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const { info, texts } = data;
  const { dataAPI } = useContext(MainContext);

  useEffect(() => {
    dataAPI(data);
  }, []);

  return (
    <>
      <Head>
        <title>NT Co. | digital agency</title>
        <meta name="description" content={info.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WelcomeHome text={texts.about} />
        <SkillSet />
        <Marquee />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await api.get();

  return {
    props: {
      data,
    },
  };
};
