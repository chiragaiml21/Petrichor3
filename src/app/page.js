"use client";

import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import "../components/Hero.css";
import Products from "../components/Products";
import ProductYouLike from "../components/ProductYouLike";
import { ProductItems } from "../data/data";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="hero hidden sm:w-full sm:h-screen sm:block "></div>
      <h1 className='text-center text-3xl sm:mt-20 sm:ml-0 sm:relative absolute mt-60 ml-20 underline'>You may also like</h1>
      <Products products={ProductItems.products} />
    </div>
  );
}
