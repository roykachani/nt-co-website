import { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import TextPrinter from '../TextPrinter/TextPrinter';
import { MainContext } from '../../context/mainContext';

import styles from './SkillSet.module.css';

const SkillSet = () => {
	const [showText, setShowText] = useState(true);
	const { fontLoaded, windowSize } = useContext(MainContext);
	const { width, height } = windowSize;
	const text = `Our skillset`;

	gsap.registerPlugin(ScrollTrigger);

	const tl = useRef();
	const addAnim = () => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				id: 'tl2',
				trigger: '#skills',
				// start: 'top top',
				// end: '150% 45%',
				scrub: true,
				// markers: true,
				onEnter: function () {
					setShowText(false);
				},
			},
		});

		ScrollTrigger.refresh(true);
	};
	const removeAnim = () => {
		ScrollTrigger.getById('tl2').kill(true);
		tl.current.kill();
	};

	useEffect(() => {
		addAnim();
		return () => {
			removeAnim();
		};
	}, [width, height, fontLoaded]);

	return (
		<>
			<div className={styles.main_container}>
				<div className={styles.skills_container}>
					<div className={styles.skill_box_subTitle}>
						<h2 className={styles.skill_subTitle} id="skills">
							<TextPrinter showText={showText} text={text} id="our_skills" />
						</h2>
					</div>
					<div className={styles.our_box_description}>
						<p className={styles.our_description}>
							We aid our clients from the early stages of a project, all the way
							up to the endgame. We have the expertise and the right tools to
							help Esports organizations level up their brands.
						</p>
					</div>
					<div className={styles.skill_cards_container}>
						<div className={styles.card}></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SkillSet;
