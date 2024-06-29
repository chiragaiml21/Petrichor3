"use client";
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const page = () => {
    const {data: session} = useSession();
  return (
    // View orders 
    // Upload products
    // Update Products

    <>
    <div className="min-h-screen bg-gray-100 p-8">
  <h1 className="text-4xl font-bold text-gray-800 mb-10">Admin Page</h1>
  <div className="flex flex-col items-center justify-center space-y-4">
    <a href={"/orders"} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
      View Orders
    </a>
    <a href={"upload-product"} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
      Upload Products
    </a>
    <a href="/admin/update" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
      Update Products
    </a>
  </div>
</div>
    </>
  )
}

export default page
