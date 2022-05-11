import styles from './nav.module.css';

const Nav = () => {
	return (
		<>
			<div className={styles.nav}>
				<div className={styles.nav_container}>
					<div className={styles.nav_item}>
						<a className={styles.logo}>
							<h1 className={styles.logo}>NT Co.</h1>
						</a>
						<div className={styles.line_container}></div>
						<div className={styles.logo_description}>
							<span className={styles.description_title}>digital agency</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
