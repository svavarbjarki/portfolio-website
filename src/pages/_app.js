import '../styles/globals.css';

// Every page in the app is a self-contained, dark-themed route with its own
// chrome, so there's no shared Layout wrapper.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
