import { useEffect, useRef } from 'react';
import { usePrintText } from '../../hook/usePrintText';
import styles from './textPrinter.module.css';

const TextPrinter = ({ showText, text, id }) => {
  const spanRef = useRef();
  const handlePrint = () => usePrintText(text, showText, spanRef);

  const textStyle = id === 'our_skills' ? styles.skill_text_title : styles.text;
  const underscoreStyle =
    id === 'our_skills'
      ? `${styles.txt_cursor} ${styles.skill_text_title}`
      : styles.txt_cursor;

  useEffect(() => {
    // console.log(showText, 'efecto');
    if (!showText) {
      const print = handlePrint();
      // console.log(print);
    }
  }, [showText]);

  return (
    <>
      <span
        id={id}
        ref={spanRef}
        className={textStyle}
        hidden={showText && false}
      ></span>
      <span className={underscoreStyle}>_</span>
    </>
  );
};

export default TextPrinter;
