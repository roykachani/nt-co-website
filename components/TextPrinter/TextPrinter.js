import { useEffect } from 'react';
import { usePrintText } from '../../hook/usePrintText';
import styles from './textPrinter.module.css';

const TextPrinter = ({ showText, text, id }) => {
	const handlePrint = () => usePrintText(text, showText, id);

	const textStyle = id === 'our_skills' ? styles.skill_text_title : styles.text;
	const underscoreStyle =
		id === 'our_skills'
			? `${styles.txt_cursor} ${styles.skill_text_title}`
			: styles.txt_cursor;

	useEffect(() => {
		console.log(showText, 'efecto');
		if (!showText) {
			const print = handlePrint();
			console.log(print);
		}
	}, [showText]);

	return (
		<>
			<span id={id} className={textStyle} hidden={showText && false}></span>
			<span className={underscoreStyle}>_</span>
		</>
	);
};

export default TextPrinter;
