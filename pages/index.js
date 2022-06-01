import Head from 'next/head';

import WelcomeHome from '../components/Welcome';
import SkillSet from '../components/SkillSet';

import styles from '../styles/Home.module.css';
import api from '../utils/api';
import Marquee from '../components/Marquee';

export default function Home({ data }) {
  const { info, texts, skills } = data;
  return (
    <>
      <Head>
        <title>NT Co. | digital agency</title>
        <meta name="description" content={info.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WelcomeHome text={texts.about} />
        <SkillSet skills={skills} texts={texts.skills} />
        <Marquee />
      </main>
      <footer></footer>
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
