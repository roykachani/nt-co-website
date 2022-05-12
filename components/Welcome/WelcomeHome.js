import Head from 'next/head';
import { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'react-lottie-player';

import { MainContext } from '../../context/mainContext';
import Nav from '../Nav';
import WelcomeText from '../WelcomeText';
import lottieAnimation from '../../lottie/nt-co-final.json';

import styles from './welcomeHome.module.css';

const WelcomeHome = () => {
	const [showText, setShowText] = useState(true);
	const { fontLoaded, windowSize } = useContext(MainContext);
	const { width, height } = windowSize;

	const responsive = {
		desktop: 1024,
		tablet: 768,
		mobile: 540,
	};
	const MaxScaleLottie =
		width >= responsive.desktop ? 5 : width >= responsive.tablet ? 4 : 3;

	const axisY =
		width >= responsive.desktop ? 125 : width >= responsive.tablet ? 100 : 0;

	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();
	const addAnim = () => {
		tl.current = gsap
			.timeline({
				scrollTrigger: {
					id: 'tl1',
					trigger: '#lottie_container',
					pin: true,
					start: 'top top',
					end: '150% 45%',
					scrub: true,
					markers: true,
					onUpdate: function () {
						//si el timeline esta en el 50% de la animacion
						if (tl.current.progress() >= 0.4) {
							setShowText(false);
							//seteo el estado de la animacion a true
							// setIsAnimation(true);
						}
					},
				},
			})
			.to('#lottie', { scale: MaxScaleLottie, y: axisY, duration: 10 })
			.to('#lottie', { opacity: 0.25, duration: 7 }, '-=10')
			.to('#text_container', { opacity: 1, duration: 0.2 }, '-=7');
		ScrollTrigger.refresh(true);
	};

	const removeAnim = () => {
		ScrollTrigger.getById('tl1').kill(true);
		tl.current.kill();
	};

	useEffect(() => {
		addAnim();
		return () => {
			removeAnim();
		};
	}, [width, height, fontLoaded]);

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
					<WelcomeText showText={showText} />
				</div>
				<div className={styles.text_scroll}>
					<p>scroll down to start playing</p>
				</div>
			</div>
		</div>
	);
};
export default WelcomeHome;
