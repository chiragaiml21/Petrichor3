"use client";

import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const Page = () => {
    const {data: session} = useSession();
  return (
    <>
        {session && (
            <div className='h-screen flex flex-1 items-center justify-center'>
                <h1 className='text-3xl font-bold'>Welcome {session.user.email}</h1>
                <button onClick={signOut}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
            </div>
        )}


    </>
  )
}

export default Page
