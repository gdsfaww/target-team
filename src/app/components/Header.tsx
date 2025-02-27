'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  const menuItems = [
    { href: '/blog', label: 'Блог' },
    { href: '/cases', label: 'Кейсы' },
    { href: '/pricing', label: 'Тарифы' },
    { href: '/contacts', label: 'Контакты' }
  ];

  return (
    <header className={`bg-white shadow-sm py-4 fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="font-bold text-xl cursor-pointer" 
          onClick={() => handleLinkClick('/')}
        >
          Команда Кривицкого
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleLinkClick('/')}>Главная</li>
            {menuItems.map((item) => (
              <li 
                key={item.href}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => handleLinkClick(item.href)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={handleToggleMenu}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                <li 
                  className="text-lg font-medium cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleLinkClick('/')}
                >
                  Главная
                </li>
                {menuItems.map((item) => (
                  <li 
                    key={item.href}
                    className="text-lg font-medium cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}