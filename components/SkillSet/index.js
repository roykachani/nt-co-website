import { lazy, Suspense, useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import { useNearScreen } from '../../hook/useNearScreen';

const SkillSet = lazy(() => import('./SkillSet'));

export default function LazySkillSet() {
  const { isNearScreen, fromRef } = useNearScreen('800px');
  const { mainState, windowSize } = useContext(MainContext);

  return (
    <div ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen ? (
          <SkillSet
            skills={mainState.skills}
            texts={mainState.texts.skills}
            width={windowSize.width < 540 ? true : false}
          />
        ) : null}
      </Suspense>
    </div>
  );
}
