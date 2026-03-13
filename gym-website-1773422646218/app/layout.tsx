import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>GymHub</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;