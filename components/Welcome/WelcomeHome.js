import Head from 'next/head';
import { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'react-lottie-player';

import Nav from '../Nav';
import WelcomeText from '../WelcomeText';
import lottieAnimation from '../../lottie/nt-co-final.json';

import styles from './welcomeHome.module.css';

const WelcomeHome = () => {
	const [showText, setShowText] = useState(true);

	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();
	const addAnim = () => {
		tl.current = gsap
			.timeline({
				scrollTrigger: {
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
			.to('#lottie', { scale: 5, y: 100, duration: 10 })
			.to('#text_container', { opacity: 1 }, '-=8');
		ScrollTrigger.refresh();
	};

	useEffect(() => {
		addAnim();
		console.log('animation added');
	}, []);

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
