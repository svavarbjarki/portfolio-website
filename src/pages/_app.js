import '../styles/globals.css';
import AnimatedBackground from '../components/AnimatedBackground';

// Every page in the app is a self-contained, dark-themed route with its own
// chrome, so there's no shared Layout wrapper. The animated background is
// mounted once here so it sits behind every route (home, /uses, /projects/*).
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatedBackground />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
