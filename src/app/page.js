"use client";

import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import "../components/Hero.css";
import Products from "../components/Products";
import { ProductItems } from "../data/data";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="hero hidden sm:w-full sm:h-screen sm:block "></div>
      <Products products={ProductItems.products} />
    </div>
  );
}
