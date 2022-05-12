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

	useEffect(() => {
		console.log(document.fonts);
		document.fonts.ready.then(setFontLoaded(true));

		//recalcula window size
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		handleResize();
		//controla la cantidad de veces que el "user" hace resize para que no se repita el handleResize continuamente
		const debouncedHandleResize = debounce(handleResize, 200);

		window.addEventListener('resize', debouncedHandleResize);

		return () => window.removeEventListener('resize', debouncedHandleResize);
	}, []);
	useEffect(() => {
		console.log(document.fonts);
	}, [fontLoaded]);

	return (
		<Provider value={{ mainState, fontLoaded, windowSize }}>
			{children}
		</Provider>
	);
};
