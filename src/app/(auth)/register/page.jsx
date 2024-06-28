"use client";

import React from "react";
import axios from "axios";

const page = () => {
  const [user, setUser] = React.useState({
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
    <div className="flex flex-1 justify-center items-center w-full">
      <div className=" w-1/2 bg-black">
        <form
          onSubmit={handleSubmit}
          className="p-10 flex flex-1 flex-col gap-5"
        >
          <h1 className="text-white">Register here</h1>
          <input
            type="text"
            className="p-4"
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            placeholder="Name"
          />
          <input
            type="text"
            className="p-4"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="Email"
          />
          <input
            type="password"
            className="p-4"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            placeholder="Password"
          />
          <button className="text-white p-5" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
