import { MainProvider } from '../context/mainContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	);
}

export default MyApp;
