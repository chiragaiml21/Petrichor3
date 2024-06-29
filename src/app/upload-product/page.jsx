"use client";

import React, { useState } from 'react';

const Page = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log({ productName, productPrice, productImage });
    // Here you would typically send the data to your server
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  return (
    <div className="py-16 max-w-md mx-auto my-10 sm:w-full w-80">
      <h1 className="text-3xl font-bold mb-6 pb-2">Upload Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-[#b29a76 focus:border-[#b29a76]"
          />
        </div>
        <div>
          <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Product Price</label>
          <input
            type="text"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-[#b29a76 focus:border-[#b29a76]"
          />
        </div>
        <div className='pb-6'>
          <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Product Image</label>
          <input
            type="file"
            id="productImage"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-[#b29a76] focus:border-[#b29a76]"
          />
        </div>
        <button type="submit" className="w-full bg-[#b29a76] text-white font-bold py-2 px-4 rounded hover:bg-[#b29a76]/90">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default Page;