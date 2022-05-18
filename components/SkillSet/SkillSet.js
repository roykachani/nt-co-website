import { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { MainContext } from '../../context/mainContext';
import TextPrinter from '../TextPrinter/TextPrinter';
import Card from '../Card';

import styles from './SkillSet.module.css';

const SkillSet = ({ skills, texts }) => {
	const [showText, setShowText] = useState(true);
	const { fontLoaded, windowSize } = useContext(MainContext);
	const { width, height } = windowSize;

	gsap.registerPlugin(ScrollTrigger);

	const tl = useRef();
	const addAnim = () => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				id: 'tl2',
				trigger: '#skills',
				// start: 'top 75%',
				// end: 'bottom bottom',
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
							<TextPrinter
								showText={showText}
								text={texts.title}
								id="our_skills"
							/>
						</h2>
					</div>
					<div className={styles.our_box_description} id="our_box_description">
						<span className={styles.our_description} id="our_description">
							{texts.description}
						</span>
					</div>
					<div className={styles.skill_cards_container}>
						<div className={styles.wrapper_cards}>
							{skills.map((skill, index) => (
								<Card key={index} skill={skill} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SkillSet;
