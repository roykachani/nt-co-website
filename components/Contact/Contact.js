import { useState, useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { MainContext } from '../../context/mainContext';
import TextPrinter from '../TextPrinter/TextPrinter';
import CopiedLink from '../Icons/CopiedLink';

import styles from './contact.module.css';

const Contact = ({ text, info }) => {
  const [showText, setShowText] = useState(true);
  const [copied, setCopied] = useState(false);
  const { fontLoaded, windowSize } = useContext(MainContext);
  const { width, height } = windowSize;

  gsap.registerPlugin(ScrollTrigger);

  const tl = useRef();
  const addAnim = () => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        id: 'tl3',
        trigger: '#contact',
        // start: 'top 75%',
        // end: 'bottom bottom',
        scrub: true,
        // markers: true,
        onEnter: function () {
          setShowText(false);
        },
      },
    });

    ScrollTrigger.refresh(true);
  };
  const removeAnim = () => {
    ScrollTrigger.getById('tl3').kill(true);
    tl.current.kill();
  };

  useEffect(() => {
    addAnim();
    return () => {
      removeAnim();
    };
  }, [width, height, fontLoaded]);

  const showClipText = (e) => {
    let clipText = e.target.id;
    let type = clipText.split('-')[1];
    document.getElementById(`copied-${type}`).innerHTML = 'Copied to clipboard';
    setCopied(true);
  };

  const hideCopiedText =
    copied === false
      ? styles.notCopiedLink
      : `${styles.notCopiedLink} ${styles.copiedLink}`;
  const hideIconCopi = copied === false ? styles.iconCopy : styles.copiedLink;

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
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
                  <a href={`#mailto:${info}`}>{info}</a>
                  <div
                    className={hideIconCopi}
                    id="copy-A"
                    onClick={(e) => {
                      navigator.clipboard.writeText(info);
                      showClipText(e);
                    }}
                  >
                    <span
                      id="copied-A"
                      hidden={!copied}
                      className={hideCopiedText}
                    ></span>
                    <CopiedLink />
                  </div>
                </h4>
              </div>
            </div>
            <div className={styles.contact_box_right}>
              <div className={styles.contact_figure}>
                <div className={styles.contact_figure_diamond}>
                  <div className={styles.contact_figure_diamond_inner}></div>
                </div>
              </div>
              <div className={styles.contact_email}>
                <h4 className={styles.email}>
                  <a href={`#mailto:${info}`}>{info}</a>
                  <div
                    className={hideIconCopi}
                    id="copy-B"
                    onClick={(e) => {
                      navigator.clipboard.writeText(info);
                      showClipText(e);
                    }}
                  >
                    <span
                      id="copied-B"
                      hidden={!copied}
                      className={hideCopiedText}
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
