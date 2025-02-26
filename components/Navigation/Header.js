'use client';

import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import SearchBar from '../Search/SearchBar';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600 mr-6">
              EcomUI
            </Link>
            <BurgerMenu />
          </div>
          <div className="flex-1 max-w-xl mx-6">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/products" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}