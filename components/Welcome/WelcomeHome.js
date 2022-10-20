import { useState, useContext, useRef } from 'react';
import Lottie from 'react-lottie-player';

import { MainContext } from '../../context/mainContext';
import { useScrollText } from '../../hook/useScrollText';
import Nav from '../Nav';
import TextPrinter from '../TextPrinter';
import lottieAnimation from '../../lottie/nt-co-final.json';

import styles from './welcomeHome.module.css';

const WelcomeHome = ({ text }) => {
  const [showText, setShowText] = useState(true);
  const { windowSize } = useContext(MainContext);
  const { width } = windowSize;
  const textRef = useRef();

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
      target: '#text_scroll',
      animation: { opacity: 0, duration: 0.5 },
      duration: '-=0.5',
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
      //si el timeline esta en x progreso de la animacion
      if (tl.current.progress() >= 0.07) {
        textRef.current.classList.add(styles.text_is_visible);
        return setShowText(false);
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
        <div
          className={styles.text_container}
          id="text_container"
          ref={textRef}
        >
          <TextPrinter showText={showText} text={text} id="text" ms={350} />
        </div>
        <div className={styles.text_scroll} id="text_scroll">
          <span>scroll down to start playing</span>
        </div>
      </div>
    </div>
  );
};
export default WelcomeHome;
