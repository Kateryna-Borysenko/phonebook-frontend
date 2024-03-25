import React, { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';
import s from './Layout.module.css';

const Layout = () => {
  const [footerFixed, setFooterFixed] = useState(false);

  useEffect(() => {
    function handleResize() {
      const windowHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;
      const contentVisibleHeight = window.innerHeight + window.scrollY;
      if (
        contentHeight <= windowHeight ||
        contentVisibleHeight <= windowHeight
      ) {
        setFooterFixed(true);
      } else {
        setFooterFixed(false);
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  return (
    <Container>
      <Header />
      <main className={s.wrapper}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>

      <div className={footerFixed ? `${s.footerFixed}` : null}>
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
