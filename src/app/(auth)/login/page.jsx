"use client";

import React, { useRef, useState } from 'react';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
    const [loading, setLoading] = useState(false);
    const {data: session} = useSession();
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
          if(session.user.isAdmin){
            router.push("/admin");
          } else {
            router.push("/profile");
          }
        }, 1000);
      } else {
        console.error("Sign-in failed");
      }
      console.log(result);
      console.log(email.current);
      console.log(password.current  );
    };

  return (
    <div className="flex justify-center items-center">
      <div className="sm:w-2/3 lg:w-4/12 py-28">
        <h1 className="text-center text-4xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="px-8 py-10 w-full">
          <div className="mb-4">
            <input
            className='w-full border p-4'
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
            <input
            className='w-full border p-4'
              ref={password} // Changed to use ref
              id="password"
              placeholder="••••••••"
              type="password"
              onChange={(e) => {
                password.current = e.target.value;
              }}
            />
          </div>
          <div className="flex items-center justify-between py-4">
              <button 
              onClick={() => signIn('google')}
              type="button" 
              className="text-white w-1/2  bg-[#b29a76] hover:bg-[#b29a76]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm px-8 sm:px-5 py-2.5 text-center inline-flex items-center justify-between mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              <div className="sm:block hidden">Sign in with Google</div>
              <div className='sm:hidden'>Google</div>
              </button>

            <button type="submit" className="text-white bg-[#b29a76] hover:bg-[#b29a76]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mb-2">
              Login
            </button>
            
          </div>
          <Link href={"/register"}><p className='text-center my-4 text-[#744f16] hover:text-[#b29a76]/90'>~Create account~</p></Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;