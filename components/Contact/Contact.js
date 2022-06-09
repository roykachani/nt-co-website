import { useState, useEffect, useRef } from 'react';

import TextPrinter from '../TextPrinter/TextPrinter';
import CopiedLink from '../Icons/CopiedLink';

import styles from './contact.module.css';
import { useScrollText } from '../../hook/useScrollText';

const Contact = ({ text, info }) => {
  const [showText, setShowText] = useState(true);
  const [copied, setCopied] = useState(false);

  const textRefA = useRef();
  const textRefB = useRef();
  const boxRefA = useRef();
  const boxRefB = useRef();

  useScrollText(
    'tl3',
    '#contact',
    false,
    '',
    '',
    true,
    false,
    true,
    false,
    function () {
      setShowText(false);
    }
  );

  // copy to clipboard
  // usar componente TEXTPRINT para imprimir texto clipboard

  const showClipText = () => {
    textRefA.current.innerHTML = 'Copied to clipboard';
    textRefA.current.classList.add(styles.copiedLink);
    boxRefA.current.classList.add(styles.copiedLink);
    return setCopied(true);
  };

  useEffect(() => {
    if (!!copied) {
      setTimeout(() => {
        textRefA.current.classList.remove(styles.copiedLink);
        boxRefA.current.classList.remove(styles.copiedLink);
        setCopied(false);
      }, 2000);
    }
    if (!copied)
      setTimeout(() => {
        textRefA.current.innerHTML = '';
      }, 1000);
    return clearTimeout();
  }, [copied]);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.contact_container}>
          <div className={styles.contact_subTitle_box} id="contact">
            <h2 className={styles.contact_subTitle}>
              <TextPrinter showText={showText} text={text} id="email" />
            </h2>
          </div>
          <div className={styles.contact_email_box}>
            <div className={styles.contact_box_left}>
              <div className={styles.contact_figure}>
                <div className={styles.contact_figure_circle}>
                  <div className={styles.contact_figure_circle_inner}></div>
                </div>
              </div>
              <div className={styles.contact_email}>
                <h4 className={styles.email}>
                  <a
                  // href={`mailto:${info}`}
                  >
                    {info}
                  </a>
                  <div
                    className={styles.iconCopy} //styles padre
                    ref={boxRefA}
                    id="copy-A"
                    onClick={() => {
                      navigator.clipboard.writeText(info);
                      showClipText();
                    }}
                  >
                    <span
                      ref={textRefA}
                      className={styles.notCopiedLink} //styles hijo text
                    ></span>
                    <CopiedLink />
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
