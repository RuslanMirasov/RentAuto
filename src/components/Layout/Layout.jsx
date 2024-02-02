import { Suspense } from 'react';
import Main from 'components/Main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loading from '../Loading/Loading';
import Popup from 'components/Popup/Popup';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Main>
      <Footer />
      <Popup />
    </>
  );
};
