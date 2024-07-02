"use client";

import React, {useState} from "react";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("password", user.password);
        // console.log("This is the frontEnd response " + formData);
      const response = await axios.post("api/auth/register", formData);
      console.log("Login Response " + response);
    //   router.push("/login");
    } catch (e) {
      console.error("Register Failed!");
    }
    console.log("submit");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="sm:w-2/3 lg:w-4/12 py-28">
      <h1 className="text-center text-4xl font-bold mb-6">Create Account</h1>
        <form
          onSubmit={handleSubmit}
          className="px-8 py-10 w-full"
        >
          <div className="mb-4">
          <input
            type="text"
            className="w-full border p-4"
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            placeholder="Name"
          />
          </div>
          
          <div className="mb-4">
          <input
            type="text"
            className="w-full border p-4"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="Email"
          />
          </div>
          
          <div className="mb-4">
          <input
            type="password"
            className="w-full border p-4"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            placeholder="Password"
          />
          </div>
          
          <div className="flex items-center justify-between py-4">
              <button 
              onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })}
              type="button" 
              className="text-white w-1/2  bg-[#b29a76] hover:bg-[#b29a76]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm px-8 sm:px-5 py-2.5 text-center inline-flex items-center justify-between mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              <div className="sm:block hidden">Sign up with Google</div>
              <div className='sm:hidden'>Google</div>
              </button>

            <button type="submit" className="text-white bg-[#b29a76] hover:bg-[#b29a76]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mb-2">
              Create
            </button>

          </div>
          <Link href={"/login"}><p className='text-center my-4 text-[#744f16] hover:text-[#b29a76]/90'>~Login account~</p></Link>
        </form>
      </div>
    </div>
  );
};

export default page;
