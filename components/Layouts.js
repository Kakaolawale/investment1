import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import ThemeSwitcher from './ThemeSwitcher';


// I imported the navbar and footer to set them as my app structure but with a prop to control where they should show in the app.
const Layouts = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
     <Navbar />
     <ThemeSwitcher />
     {children}
      <Footer />
    </div>
  );
};

export default Layouts;

