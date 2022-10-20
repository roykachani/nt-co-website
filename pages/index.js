import { useContext, useEffect } from 'react';
import Head from 'next/head';

import { MainContext } from '../context/mainContext';
import WelcomeHome from '../components/Welcome';
import SkillSet from '../components/SkillSet';
// import Marquee from '../components/Marquee';
import Contact from '../components/Contact';
import api from '../utils/api';

export default function Home({ data }) {
  const { info, texts } = data;
  const { dataAPI } = useContext(MainContext);

  useEffect(() => {
    dataAPI(data);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NT Co. | digital agency</title>
        <meta name="description" content={info.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="end-to-end agency, digital agency, nice try, nice try co., new trends and develop, help organizations level up their brands, Digital Marketing, strategy, Brand Strategy, Planning, Research, gaming, Team Management, Events, Tournaments, Events & Tournaments, Live Streams, design, Branding, Product Development, Motion,UX / UI, App Development, Content Production, Live Streams, Audiovisual"
        />
        <link rel="canonical" href="https://www.nice-try.co/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta content="#18181a" name="theme-color" />
        <meta name="copyright" content={info.copyright} />
        <meta name="author" content={info.author} />
      </Head>

      <main>
        <WelcomeHome text={texts.about} />
        <SkillSet />
        {/* <Marquee /> hasta nuevo aviso */}
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
