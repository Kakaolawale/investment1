// components/Navbar.js
import { useState, useEffect } from 'react';
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

const links = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'Schema', href: '/navpages/about' },
  { id: 3, text: 'Ranking', href: '/navpages/tucson' },
  { id: 4, text: 'How It Works', href: '/navpages/lagos' },
  { id: 5, text: 'About', href: '/navpages/abuja' },
  { id: 6, text: 'Blog', href: '/navpages/future' },
  { id: 7, text: 'Contact', href: '/navpages/careers' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.getElementById('navbar');

      if (currentScrollPos > prevScrollPos) {
        // Scrolling downward
        navbar.style.opacity = '0.8';
      } else {
        // Scrolling upward
        navbar.style.opacity = '1';
      }

      // Use parseFloat to convert opacity to a number
      setIsBlackBackground(parseFloat(navbar.style.opacity) < 1);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="navbar"
      className={`dark:bg-black bg-white text-black dark:text-white transition-opacity duration-500 top-0 fixed w-full ${
        isMenuOpen ? 'opacity-100' : 'opacity-90'
      } ${isBlackBackground ? 'backdrop-blur-7xl' : ''} z-50 p-4`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src={isBlackBackground ? '/images/newwhitepng.png' : '/images/newblackpng.png'}
          width={40}
          height={40}
          alt="Vortex Finance"
        />
        <div className="hidden md:flex items-center space-x-4 justify-center flex-grow">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`flex items-center space-x-2 ${link.text === 'Home' ? 'font-bold' : 'font-normal'}`}
            >
              {link.icon}
              <span>{link.text}</span>
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-white hover:bg-orange-500 text-black hover:text-white font-bold p-2 rounded-md">REGISTER</button>
          <button className="bg-white hover:bg-orange-500 text-black hover:text-white font-bold p-2 rounded-md">ACCOUNT</button>
          <button className="bg-white hover:bg-orange-500 text-black hover:text-white font-bold p-2 rounded-md">LANGUAGE v</button>
          <ThemeSwitcher />
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute font-bold top-28 text-center left-4 right-4 bg-gray-800 backdrop-blur-3xl mx-2 p-8 space-y-8 rounded-md shadow-md"
          >
            {links.map((link) => (
              <a key={link.id} href={link.href} className="block mb-2">
                {link.icon}
                <span className="ml-2 text-white text-center hover:text-orange-500">{link.text}</span>
              </a>
            ))}
           <div className="flex flex-col items-center space-y-4">
              <button className="bg-white hover:bg-orange-500 text-black hover:text-white font-bold p-2 rounded-md w-32">REGISTER</button>
              <button className="bg-white hover:bg-orange-500 text-black hover:text-white font-bold p-2 rounded-md w-32">ACCOUNT</button>
              <button className="bg-white hover:bg-orange-500 text-black hover:text-white font-bold p-2 rounded-md w-32">LANGUAGE v</button>
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;



