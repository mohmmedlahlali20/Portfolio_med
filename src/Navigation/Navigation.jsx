import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
<nav className={`bg-white ${isDarkMode ? 'dark:bg-gray-800' : ''} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className={`text-xl font-bold ${isDarkMode ? 'dark:text-white' : 'text-gray-800'}`}>PortFolio</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className={`text-gray-800 dark:text-white hover:text-gray-600 ${isDarkMode ? 'dark:hover:text-gray-300' : 'hover:text-gray-300'} px-3 py-2 rounded-md text-sm font-medium`}>
                  Home
                </Link>
                <Link to="/about" className={`text-gray-800 dark:text-white hover:text-gray-600 ${isDarkMode ? 'dark:hover:text-gray-300' : 'hover:text-gray-300'} px-3 py-2 rounded-md text-sm font-medium`}>
                  About
                </Link>
                <Link to="/contact" className={`text-gray-800 dark:text-white hover:text-gray-600 ${isDarkMode ? 'dark:hover:text-gray-300' : 'hover:text-gray-300'} px-3 py-2 rounded-md text-sm font-medium`}>
                  Contact
                </Link>
                <Link to="/project" className={`text-gray-800 dark:text-white hover:text-gray-600 ${isDarkMode ? 'dark:hover:text-gray-300' : 'hover:text-gray-300'} px-3 py-2 rounded-md text-sm font-medium`}>
                  Project
                </Link>
                <Link to="/Skill" className={`text-gray-800 dark:text-white hover:text-gray-600 ${isDarkMode ? 'dark:hover:text-gray-300' : 'hover:text-gray-300'} px-3 py-2 rounded-md text-sm font-medium`}>
                  Skilles
                </Link>
              </div>
            </div>
          </div>
     
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className={`text-gray-800 dark:text-white hover:text-gray-600 ${isDarkMode ? 'dark:hover:text-gray-300' : 'hover:text-gray-300'} block px-3 py-2 rounded-md text-base font-medium`}>
            Home
          </Link>
          <Link to="/about" className={`text-gray-800 dark:text-white hover:text-gray-600 ${isDarkMode ? 'dark:hover:text-gray-300' : 'hover:text-gray-300'} block px-3 py-2 rounded-md text-base font-medium`}>
            About
          </Link>
          <Link to="/contact" className={`text-gray-800 dark:text-white hover:text-gray-600 ${isDarkMode ? 'dark:hover:text-gray-300' : 'hover:text-gray-300'} block px-3 py-2 rounded-md text-base font-medium`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
