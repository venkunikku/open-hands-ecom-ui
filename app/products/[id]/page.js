'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Navigation/Header';

export default function ProductDetails({ params }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // In a real app, this would be an API call
    const dummyProduct = {
      id: params.id,
      name: `Product ${params.id}`,
      price: (Math.random() * 100 + 10).toFixed(2),
      image: `https://picsum.photos/seed/${params.id}/800/600`,
      description: `This is a detailed description for Product ${params.id}. Our product offers exceptional quality and value. It's designed with attention to detail and crafted using premium materials to ensure durability and performance. Perfect for those who appreciate fine craftsmanship and practical functionality.`,
      features: [
        'Premium quality materials',
        'Durable construction',
        'Elegant design',
        'Versatile functionality',
        'Easy maintenance'
      ],
      specifications: {
        'Material': 'Premium grade',
        'Dimensions': '12" x 8" x 4"',
        'Weight': '2.5 lbs',
        'Color': 'Multiple options available',
        'Warranty': '1 year limited'
      }
    };
    setProduct(dummyProduct);
  }, [params.id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

  const addToCart = () => {
    alert(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart!`);
  };

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-24 bg-gray-200 rounded mb-8"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="relative h-96 md:h-full min-h-[400px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <nav className="mb-4">
                <Link 
                  href="/products"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Products
                </Link>
              </nav>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-4xl font-bold text-indigo-600 mb-6">${product.price}</p>
              
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    onClick={addToCart}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="prose prose-indigo max-w-none">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-600">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between sm:block">
                      <dt className="font-medium">{key}:</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}