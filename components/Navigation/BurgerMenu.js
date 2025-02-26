'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block w-6 h-0.5 bg-gray-600 mt-1 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Products
          </Link>
          <Link href="/categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Categories
          </Link>
          <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            About
          </Link>
        </div>
      )}
    </div>
  );
}