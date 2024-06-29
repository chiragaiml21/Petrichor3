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
    <div className="flex flex-col items-center justify-center h-screen gap-y-10">
        <h1 className="text-4xl font-bold">Admin Page</h1>
        <div className="flex flex-col items-center justify-center gap-y-5">
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

        
      {session && (
        <div>
          <button onClick={signOut}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Logout</button>
        </div>
      )}

    </div>
    </>
  )
}

export default page
