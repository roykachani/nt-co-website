import { useState } from 'react';

import { useScrollText } from '../../hook/useScrollText';
import TextPrinter from '../TextPrinter/TextPrinter';
import Card from '../Card';
import CardMobile from '../Card/CardMobile';

import styles from './SkillSet.module.css';

const SkillSet = ({ skills, texts, width }) => {
  const [showText, setShowText] = useState(true);

  useScrollText(
    'tl2',
    '#skills',
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

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.skills_container}>
          <div className={styles.skill_box_subTitle}>
            <h2 className={styles.skill_subTitle} id="skills">
              <TextPrinter
                showText={showText}
                text={texts?.title}
                id="our_skills"
              />
            </h2>
          </div>
          <div className={styles.our_box_description} id="our_box_description">
            <span className={styles.our_description} id="our_description">
              {texts?.description}
            </span>
          </div>
          <div className={styles.skill_cards_container}>
            <div className={styles.wrapper_cards}>
              {!width
                ? skills.map((skill, index) => (
                    <Card key={index} skill={skill} width={width} />
                  ))
                : skills.map((skill, index) => (
                    <CardMobile key={index} skill={skill} width={width} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSet;
