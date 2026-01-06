import { Outlet } from 'react-router';
import './Layout.scss';
import { Navigation } from '../navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import { useState } from 'react';

export const Layout = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   
  return (
    <>
      <header>
        <Navigation open={menuOpen} setOpen={setMenuOpen} />
      </header>
      <main aria-hidden={menuOpen}>
        <Outlet />
      </main>
       <footer aria-hidden={menuOpen}>
        <Footer />
      </footer>    
    </>  
    
  );
};
