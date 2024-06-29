import React from 'react';

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full sm:w-5/6">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-3/4 w-full">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className='overflow-x-auto'>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img className="hidden sm:block h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product" />
                        <span className="font-semibold">Product name</span>
                      </div>
                    </td>
                    <td className="py-4">$19.99</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button className="border rounded-md md:py-2 md:px-4 py-1 px-2 mr-2">-</button>
                        <span className="text-center md:w-8 w-4 ">1</span>
                        <button className="border rounded-md md:py-2 md:px-4 py-1 px-2 ml-2">+</button>
                      </div>
                    </td>
                    <td className="py-4">$19.99</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 w-full">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$21.98</span>
              </div>
              <button className="bg-[#b29a76] hover:bg-[#b29a76]/90 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
