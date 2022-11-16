import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { useScrollText } from '../../hook/useScrollText';
import TextPrinter from '../TextPrinter/TextPrinter';
import InstaIcon from '../Icons/InstaIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import CopiedLink from '../Icons/CopiedLink';

import styles from './contact.module.css';

const Contact = ({ text, info }) => {
  const [showText, setShowText] = useState(true);
  const [copied, setCopied] = useState(false);

  const textRefA = useRef();
  const boxRefA = useRef();

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
                    aria-label="contact email"
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
          <div className={styles.social_container}>
            <div className={styles.social_box}>
              <a
                className={styles.social_link}
                href="https://instagram.com/nt__co/"
                target="_blank"
                aria-label="more in our instagram.com/nt__co/"
              >
                <InstaIcon />
              </a>
              <a
                className={styles.social_link}
                href="https://linkedin.com/company/nt-co/"
                target="_blank"
                aria-label="more in our linkedin"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <div className={styles.dev_container}>
            <div className={styles.dev_box}>
              <span className={styles.dev_text}>Developed by </span>
              <a
                className={`${styles.dev_text} ${styles.dev_link}`}
                href="https://roykachani.com/"
                target="_blank"
                aria-label="Developed by"
              >
                Roy Kachani
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
