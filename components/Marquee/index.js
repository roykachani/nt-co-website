import { lazy, Suspense, useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import { useNearScreen } from '../../hook/useNearScreen';

const Marquee = lazy(() => import('./Marq'));

export default function LazyMarquee() {
  const { isNearScreen, fromRef } = useNearScreen('800px');
  const { mainState } = useContext(MainContext);

  return (
    <div ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen ? (
          <Marquee skills={mainState.skills} texts={mainState.texts.skills} />
        ) : null}
      </Suspense>
    </div>
  );
}
