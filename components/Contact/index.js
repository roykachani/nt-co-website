import { lazy, Suspense, useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import { useNearScreen } from '../../hook/useNearScreen';

const Contact = lazy(() => import('./Contact'));

export default function LazyContact() {
  const { isNearScreen, fromRef } = useNearScreen('800px');
  const { mainState } = useContext(MainContext);

  return (
    <div ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen ? (
          <Contact text={mainState.texts.contact} info={mainState.info.email} />
        ) : null}
      </Suspense>
    </div>
  );
}
