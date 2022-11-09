import Image from 'next/image';
import { useRef } from 'react';
import { useNearScreen } from '../../hook/useNearScreen';

import styles from './card.module.css';

const Card = ({ skill, width }) => {
  const cardRef = useRef();
  const { name, description, svgPath } = skill;

  const addClass = () => {
    cardRef.current.classList.toggle(styles.is_flipped);
  };

  /* mobile */

  if (!!width) {
    const { fromRef } = useNearScreen(
      '-130px',
      [0.5, 0.75, 1],
      styles.is_flipped
    );
    return (
      <>
        <div className={styles.card}>
          <div
            className={styles.card_inner}
            id={skill.id}
            ref={fromRef}
            onClick={addClass}
          >
            <div className={`${styles.card_face} ${styles.card_face_front}`}>
              <div className={styles.card_figure}>
                {/* <div> */}
                <Image
                  src={svgPath}
                  width={243}
                  height={360}
                  alt={name}
                  objectFit="cover"
                  loading="eager"
                />
                {/* </div> */}
              </div>
            </div>
            <div className={`${styles.card_face} ${styles.card_face_back}`}>
              <div
                className={`${styles.card_figure} ${styles.back_figure_opacity}`}
              >
                <Image
                  src="/svg-cards/simple1.svg"
                  width={243}
                  height={360}
                  alt={name}
                  objectFit="cover"
                  loading="eager"
                />
              </div>
              <div className={styles.card_content_blur}>
                <div className={styles.card_content}>
                  {description.map((item, index) => {
                    return (
                      <div key={skill.id + index}>
                        <h4 className={styles.content_description}>{item}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card_name}>
            <h3 className={styles.card_name_text}>{name}</h3>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.card_inner}
          id={skill.id}
          ref={cardRef}
          onClick={addClass}
        >
          <div className={`${styles.card_face} ${styles.card_face_front}`}>
            <div className={styles.card_figure}>
              {/* <div> */}
              <Image
                src={svgPath}
                width={243}
                height={360}
                alt={name}
                objectFit="cover"
                loading="eager"
              />
              {/* </div> */}
            </div>
          </div>
          <div className={`${styles.card_face} ${styles.card_face_back}`}>
            <div
              className={`${styles.card_figure} ${styles.back_figure_opacity}`}
            >
              <Image
                src="/svg-cards/simple1.svg"
                width={243}
                height={360}
                alt={name}
                objectFit="cover"
                loading="eager"
              />
            </div>
            <div className={styles.card_content_blur}>
              <div className={styles.card_content}>
                {description.map((item, index) => {
                  return (
                    <div key={skill.id + index}>
                      <h4 className={styles.content_description}>{item}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card_name}>
          <h3 className={styles.card_name_text}>{name}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
