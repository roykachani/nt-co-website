import Script from 'next/script';

import { MainProvider } from '../context/mainContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7TYHQKNE88"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-7TYHQKNE88');
		`}
      </Script>
    </>
  );
}

export default MyApp;
