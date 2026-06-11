import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // The home page is a self-contained, single-page experience with its own
  // chrome, so it opts out of the shared marketing Layout.
  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
