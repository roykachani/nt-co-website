import { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'react-lottie-player';

import { MainContext } from '../../context/mainContext';
import Nav from '../Nav';
import TextPrinter from '../TextPrinter';
import lottieAnimation from '../../lottie/nt-co-final.json';

import styles from './welcomeHome.module.css';

const WelcomeHome = ({ text }) => {
	const [showText, setShowText] = useState(true);
	const { fontLoaded, windowSize } = useContext(MainContext);
	const { width, height } = windowSize;

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
					// markers: true,
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
			// .to('#text_scroll', { opacity: 0, duration: 1 }) mostrar scroll text?
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
