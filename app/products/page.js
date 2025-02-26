'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Navigation/Header';

const dummyProducts = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (Math.random() * 100 + 10).toFixed(2),
  image: `https://picsum.photos/seed/${index + 1}/300/300`,
  description: `Description for Product ${index + 1}. This is a dummy product for demonstration purposes.`
}));

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dummyProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                <Link href={`/products/${product.id}`} className="cursor-pointer">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={product.id <= 4}
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">{product.name}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Added ${product.name} to cart!`);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}