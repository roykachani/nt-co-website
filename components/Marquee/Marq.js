import Marquee from 'react-fast-marquee';

import styles from './Marq.module.css';

const Marq = () => {
	return (
		<>
			<div className={styles.main_container}>
				<div className={styles.marquee_container}>
					<div className={styles.marquee_members_box}>
						<div className={styles.overlay}>
							<Marquee
								pauseOnHover={true}
								gradient={false}
								className={styles.marquee_content}
								style={{ width: '100%', height: '100%' }}
							>
								<div className={styles.marquee_text}>
									<h2 className={styles.marquee_title}>
										<span className={styles.marquee_span}>
											Our Team Members were part of these rosters:
										</span>
									</h2>
								</div>
								<div className={styles.marquee}>Member 1</div>
								<div className={styles.marquee}>Member 2</div>
								<div className={styles.marquee}>Member 3</div>
								<div className={styles.marquee}>Member 4</div>
								<div className={styles.marquee}>Member 5</div>
							</Marquee>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Marq;
