import { useEffect } from 'react';
import { usePrintText } from '../../hook/usePrintText';
import styles from './textPrinter.module.css';

const TextPrinter = ({ showText, text }) => {
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
			<span id="text" className={styles.text} hidden={showText && false}></span>
			<span className={styles.txt_cursor}>_</span>
		</>
	);
};

export default TextPrinter;
