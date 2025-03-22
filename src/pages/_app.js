import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

<Head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
</Head>


function MyApp({ Component, pageProps }) {
  return (
    <><Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
    </Head><Layout>
        <Component {...pageProps} />
      </Layout></>
  );
}

export default MyApp;
