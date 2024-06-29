import React from 'react'

const page = () => {
  return (
    // View orders 
    // Upload products
    // Update Products

    <>
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Admin Page</h1>
        <div className="flex flex-col items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/admin/orders">View Orders</a>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/admin/upload">Upload Products</a>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/admin/update">Update Products</a>
            </button>
        </div>
    </div>
    </>
  )
}

export default page
