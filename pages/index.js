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
          content="end-to-end agency, digital agency, nice try, nice try co., new trends and develop, help organizations level up their brands, Digital Marketing, strategy, Brand Strategy, Planning, Research, gaming, Team Management, Events, Tournaments, Events & Tournaments, Live Streams, design, Branding, Product Development, Motion,UX / UI, App Development, Content Production, Live Streams, Audiovisual, Productora audiovisual, creadores de contenido, diseñadores, agencia digital, streams streaming, estrategia digital, digital strategy, estrategia"
        />
        <link rel="canonical" href="https://www.nice-try.co/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta property="og:title" content="NT Co. | digital agency" />
        <meta property="og:site_name" content="Nice Try Co." />
        <meta property="og:url" content="https://www.nice-try.co/" />
        <meta property="og:description" content={info.description} />
        <meta
          property="og:image"
          content="https://www.nice-try.co/profile.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" value="@nicetryco" content="@nicetryco" /> */}
        <meta name="twitter:description" content={info.description} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#191919" />
        <meta name="msapplication-TileColor" content="#da6a7b" />
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
