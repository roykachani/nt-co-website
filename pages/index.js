import Head from 'next/head';

import WelcomeHome from '../components/Welcome/WelcomeHome';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>NT Co. | digital agency</title>
				<meta name="description" content="NT Co. - digital agency" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<WelcomeHome />
			</main>
			<footer></footer>
		</div>
	);
}
