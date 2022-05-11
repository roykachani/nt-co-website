import { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

const { Provider } = MainContext;

export const MainProvider = ({ children }) => {
	const [mainState, setMainState] = useState({});
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		console.log(document.fonts);
		document.fonts.ready.then(setFontLoaded(true));
	}, []);
	useEffect(() => {
		console.log(document.fonts);
	}, [fontLoaded]);

	return <Provider value={{ mainState, fontLoaded }}>{children}</Provider>;
};
