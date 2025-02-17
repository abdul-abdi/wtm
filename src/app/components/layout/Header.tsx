'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '#about',
    submenu: [
      { name: 'Our Mission', href: '#about' },
      { name: 'Our Team', href: '#about#team' },
      { name: 'Our Values', href: '#about#values' }
    ]
  },
  { 
    name: 'Programs', 
    href: '#programs',
    submenu: [
      { name: 'Leadership Development', href: '#programs#leadership' },
      { name: 'Code & Create', href: '#programs#code' },
      { name: 'Mentorship Program', href: '#programs#mentorship' }
    ]
  },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const handleClickOutside = (event: MouseEvent) => {
      if (activeSubmenu) {
        const dropdown = dropdownRefs.current[activeSubmenu];
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setActiveSubmenu(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSubmenu]);

  const handleMenuClick = (itemName: string, href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionId = href.split('#')[1];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setActiveSubmenu(activeSubmenu === itemName ? null : itemName);
    setIsMobileMenuOpen(false);
  };

  const handleSubmenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSubmenu(null);
    setIsMobileMenuOpen(false);

    const sectionIds = href.split('#').filter(Boolean);
    
    if (sectionIds.length > 0) {
      const mainSection = document.getElementById(sectionIds[0]);
      if (mainSection) {
        mainSection.scrollIntoView({ behavior: 'smooth' });
        
        if (sectionIds[1]) {
          setTimeout(() => {
            const subSection = document.getElementById(sectionIds[1]);
            if (subSection) {
              subSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500);
        }
      }
    }
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const joinSection = document.getElementById('contact');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-width">
        <div className="flex items-center justify-between px-4 py-6">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link 
              href="/"
              onClick={(e) => handleMenuClick('Home', '/', e)}
              className="flex items-center space-x-4 group"
            >
              <div className="relative w-12 h-12 transform-gpu transition-all duration-300 group-hover:scale-105">
                <Image
                  src="https://developers.google.com/static/womentechmakers/images/wtm-logo_96.png"
                  alt="Women Techmakers Logo"
                  fill
                  priority
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold leading-tight text-gray-900">
                    Women Techmakers
                  </span>
                  <div className="h-4 w-[1px] hidden sm:block bg-gray-300" />
                  <span className="font-medium hidden sm:block text-gray-700">
                    Zetech
                  </span>
                </div>
                <span className="text-sm hidden sm:block text-gray-600">
                  Empowering Women in Technology
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[item.name] = el;
                }}
              >
                <button
                  onClick={(e) => handleMenuClick(item.name, item.href, e)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus-ring flex items-center space-x-1 group text-gray-600 hover:text-[#00A9E0] ${
                    activeSubmenu === item.name ? 'text-[#00A9E0]' : ''
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 transition-transform group-hover:scale-x-100 ${
                      isScrolled ? 'bg-[#00A9E0]' : 'bg-white'
                    }`} />
                  </span>
                  {item.submenu && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeSubmenu === item.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-56 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                    >
                      <div className="p-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleSubmenuClick(e, subItem.href)}
                            className="block px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#00A9E0] hover:bg-gray-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              href="#contact"
              onClick={handleJoinClick}
              className="ml-4 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 
                text-white bg-[#00A9E0] hover:bg-[#0098CC] shadow-lg shadow-[#00A9E0]/20 hover:shadow-[#00A9E0]/30 
                transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg transition-all duration-200 text-gray-600 hover:text-[#00A9E0]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex items-center justify-center"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden absolute left-0 right-0 top-full px-4 bg-white/95 backdrop-blur-lg shadow-lg"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="py-4 px-3 divide-y divide-gray-100"
              >
                {navigation.map((item) => (
                  <div key={item.name} className="py-2">
                    <button
                      onClick={(e) => handleMenuClick(item.name, item.href, e)}
                      className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-600 hover:text-[#00A9E0] rounded-lg"
                    >
                      <span>{item.name}</span>
                      {item.submenu && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                    <AnimatePresence>
                      {item.submenu && activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-1 space-y-1"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => handleSubmenuClick(e, subItem.href)}
                              className="block px-4 py-2 text-sm text-gray-500 hover:text-[#00A9E0] rounded-lg"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-2 px-4">
                  <Link
                    href="#contact"
                    onClick={handleJoinClick}
                    className="block w-full px-6 py-3 text-center font-semibold text-white bg-[#00A9E0] hover:bg-[#0098CC] rounded-xl transition-colors"
                  >
                    Join Now
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 