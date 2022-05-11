import { useEffect } from 'react';
import { usePrintText } from '../../hook/usePrintText';
import styles from './welcome.module.css';

const WelcomeText = ({ showText }) => {
	const text = `We are an end-to-end agency that innovates to find new trends and
    develop game-braking metas.`;
	const handlePrint = () => usePrintText(text, showText);

	useEffect(() => {
		console.log(showText, 'efecto');
		if (!showText) {
			const print = handlePrint();
			console.log(print);
		}
	}, [showText]);

	return (
		<>
			<p id="text" className={styles.text} hidden={showText && false}></p>
		</>
	);
};

export default WelcomeText;
