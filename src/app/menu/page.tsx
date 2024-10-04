"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const pizzas = [
  {
    id: 1,
    name: 'Tex-Mex',
    image: '/images/tex-mex.webp',
    description: 'Tex-Mex chicken, onions, green peppers, jalapenos, black olives & oregano​',
    newPrice: '420 PKR',
    oldPrice: '550 PKR',
  },
  {
    id: 2,
    name: 'Chicken-Seekh Kebab',
    image: '/images/Chicken-seekh.webp',
    description: 'Grilled Chicken Seekh Kebab, Green Chilies & Onions Topped with Ranch Sauce.',
    newPrice: '420 PKR',
    oldPrice: '550 PKR',
  },
  {
    id: 3,
    name: 'Chicken-Tikka',
    image: '/images/chicketikka.webp',
    description: 'Tikka chunks, onion & green peppers.',
    newPrice: '420 PKR',
    oldPrice: '550 PKR',
  },
  {
    id: 4,
    name: 'Peri Peri',
    image: '/images/peri.webp',
    description: 'Peri Peri Chicken, Onions, tomatoes & green pepper topped with Peri Peri Sauce.',
    newPrice: '420 PKR',
    oldPrice: '550 PKR',
  },
  {
    id: 5,
    name: 'Cheese',
    image: '/images/cheese.webp',
    description: 'Cheese and cheese with some more cheese.',
    newPrice: '420 PKR',
    oldPrice: '550 PKR',
  },
  {
    id: 6,
    name: 'Legend Ranch',
    image: '/images/legend.webp',
    description: 'Grilled chicken, sliced cheese, oregano & onions topped with Ranch Sauce.',
    newPrice: '420 PKR',
    oldPrice: '550 PKR',
  },
];


const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg', 
  '/images/slide3.jpg',
];

const Menu = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <>
      {/* Render Header */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Slideshow */}
        <div className="mb-8">
          <div className="relative w-full overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={`Slideshow Image ${currentImageIndex + 1}`}
              className="w-full h-64 object-cover mb-4 transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Pizza Menu */}
        <h1 className="text-4xl font-bold text-center mb-8">Pizza Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{pizza.name}</h2>
                <p className="text-gray-600">{pizza.description}</p>
                <div className="mt-2">
                  <span className="text-red-500 line-through">{pizza.oldPrice}</span>
                  <span className="text-blue-500 font-bold ml-2">{pizza.newPrice}</span>
                </div>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Footer */}
      <Footer />
    </>
  );
};

export default Menu;
