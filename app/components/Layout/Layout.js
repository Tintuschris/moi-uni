'use client';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Offcanvas from '../Offcanvas/Offcanvas';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Offcanvas />
      <Footer />
    </>
  );
}