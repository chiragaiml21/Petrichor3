"use client";

import React, { useRef, useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const email = useRef("");
    const password = useRef("");

    const handleSubmit = async (e) => { // Added parameter e to access event
      e.preventDefault();
      if (email.current === "" || password.current === "") { // Corrected to use .value for refs
        return;
      }
      setLoading(true);
      const result = await signIn("credentials", {
        email: email.current,
      password: password.current,
      redirect: false, 
      });
  
      if (result?.ok) {
        setTimeout(() => {
          setLoading(false);
          router.push("/");
        }, 1000);
      } else {
        console.error("Sign-in failed");
      }
      console.log(result);
      console.log(email.current);
      console.log(password.current  );
    };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              ref={email} // Changed to use ref
              id="email"
              placeholder="example@example.com"
              type="email"
              onChange={(e) => {
                email.current = e.target.value;
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              ref={password} // Changed to use ref
              id="password"
              placeholder="••••••••"
              type="password"
              onChange={(e) => {
                password.current = e.target.value;
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
            <button type="button" // Changed to type="button" to prevent form submission
             onClick={() => signIn('google')}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;