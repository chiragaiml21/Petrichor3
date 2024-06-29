import React from 'react'
import HeroSection from '../components/HeroSection'
import "../components/Hero.css";
import ProductYouLike from '../components/ProductYouLike';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className='hero hidden sm:w-full sm:h-screen sm:block '>

      </div>
      <ProductYouLike />
    </div>
  )
}