'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-l from-[#01411C] to-green-400 sticky top-0 z-50  text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl text-[#01411C] font-bold">NAVTTC</div>
        <button
          className="md:hidden focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-[#01411C] md:bg-transparent p-4 md:p-0 z-10`}
        >
          <Link
            href="/"
            className="hover:underline hover:opacity-90 cursor-pointer w-full md:w-auto text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <span className="hidden md:inline">|</span>
          <Link
            href="/services"
            className="hover:underline hover:opacity-90 cursor-pointer w-full md:w-auto text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <span className="hidden md:inline">|</span>
          <Link
            href="/contact"
            className="hover:underline hover:opacity-90 cursor-pointer w-full md:w-auto text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}