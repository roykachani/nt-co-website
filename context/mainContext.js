import { useState, createContext, useEffect } from 'react';

import { debounce } from '../utils/debounce';

export const MainContext = createContext();

const { Provider } = MainContext;

export const MainProvider = ({ children }) => {
  const [mainState, setMainState] = useState({});
  const [fontLoaded, setFontLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const dataAPI = (data) => {
    setMainState(data);
  };

  useEffect(() => {
    //check si la fuente esta cargada
    document.fonts.ready.then(setFontLoaded(true));

    //recalcula window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();

    //controlo la cantidad de veces que el "user" hace resize para que no se repita el handleResize continuamente
    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return (
    <Provider value={{ mainState, fontLoaded, windowSize, dataAPI }}>
      {children}
    </Provider>
  );
};
