import Head from 'next/head';

import WelcomeHome from '../components/Welcome/WelcomeHome';
import SkillSet from '../components/SkillSet';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>NT Co. | digital agency</title>
				<meta name="description" content="NT Co. - digital agency" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<WelcomeHome />
				<SkillSet />
			</main>
			<footer></footer>
		</>
	);
}
