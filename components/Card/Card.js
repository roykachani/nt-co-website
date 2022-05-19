import { useRef } from 'react';

import Triangle from '../Icons/Triangle';
import styles from './card.module.css';

const Card = ({ skill }) => {
	const { name, description, symbol } = skill;
	const cardRef = useRef();

	const addClass = () => {
		cardRef.current.classList.toggle(styles.is_flipped);
	};

	const figure =
		symbol === 'circle'
			? styles.circle
			: symbol === 'diamond'
			? styles.diamond
			: symbol === 'triangle'
			? styles.triangle
			: symbol === 'hexagon'
			? styles.hexagon
			: styles.star;

	return (
		<>
			<div className={styles.card}>
				<div
					className={styles.card_inner}
					id={skill.id}
					ref={cardRef}
					onClick={addClass}
				>
					<div className={`${styles.card_face} ${styles.card_face_front}`}>
						<div className={styles.card_figure}>
							<div className={figure}></div>
							{/* <Triangle /> */}
						</div>
					</div>
					<div className={`${styles.card_face} ${styles.card_face_back}`}>
						<div className={styles.card_content}>
							{description.map((item, index) => {
								return (
									<div key={skill.id + index}>
										<h4 className={styles.content_description}>{item}</h4>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className={styles.card_name}>
					<h3 className={styles.card_name_text}>{name}</h3>
				</div>
			</div>
		</>
	);
};

export default Card;
