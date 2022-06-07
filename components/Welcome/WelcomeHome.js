import { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'react-lottie-player';

import { MainContext } from '../../context/mainContext';
import Nav from '../Nav';
import TextPrinter from '../TextPrinter';
import lottieAnimation from '../../lottie/nt-co-final.json';

import styles from './welcomeHome.module.css';
import { useScrollText } from '../../hook/useScrollText';

const WelcomeHome = ({ text }) => {
  const [showText, setShowText] = useState(true);
  const { windowSize } = useContext(MainContext);
  const { width } = windowSize;

  const responsive = {
    desktopA: 1680,
    desktopB: 1440,
    laptop: 1024,
    tablet: 768,
    mobile: 540,
  };
  const MaxScaleLottie =
    width > responsive.desktopB
      ? 5
      : width >= responsive.laptop
      ? 4.5
      : width >= responsive.tablet
      ? 4
      : 3;

  const axisY =
    width > responsive.desktopA
      ? 65
      : width > responsive.desktopB
      ? 120
      : width >= responsive.laptop
      ? 70
      : width >= responsive.tablet
      ? 100
      : 0;

  const animArr = [
    {
      target: '#lottie',
      animation: { scale: MaxScaleLottie, y: axisY, duration: 10 },
    },
    {
      target: '#lottie',
      animation: { opacity: 0.25, duration: 7 },
      duration: '-=10',
    },
    {
      target: '#text_container',
      animation: { opacity: 1, duration: 0.2 },
      duration: '-=7',
    },
  ];

  const [tl] = useScrollText(
    'tl1',
    '#lottie_container',
    true,
    'top top',
    '150% 45%',
    true,
    false,
    false,
    true,
    function () {
      //si el timeline esta en el 50% de la animacion
      if (tl.current.progress() >= 0.4) {
        setShowText(false);
        //seteo el estado de la animacion a true
        // setIsAnimation(true);
      }
    },
    animArr
  );

  return (
    <div className={styles.main_container}>
      <div className={styles.lottie_container} id="lottie_container">
        <Nav />
        <Lottie
          id="lottie"
          animationData={lottieAnimation}
          speed={1}
          style={{ width: 500, height: 500 }}
          play={true}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          className={styles.lottie}
        />
        <div className={styles.text_container} id="text_container">
          <TextPrinter showText={showText} text={text} id="text" />
        </div>
        <div className={styles.text_scroll} id="text_scroll">
          <span>scroll down to start playing</span>
        </div>
      </div>
    </div>
  );
};
export default WelcomeHome;
