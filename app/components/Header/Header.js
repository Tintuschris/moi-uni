'use client';
import Toolbar from './Toolbar';
import MainHeader from './MainHeader';
import Minibar from './Minibar';

export default function Header() {
  return (
    <>
      <div className="tm-header-bg"></div>
      <div className="tm-inner-container uk-container uk-container-center">
        <Toolbar />
        <MainHeader />
        <Minibar />
      </div>
    </>
  );
}