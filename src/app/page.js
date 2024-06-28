import React from 'react'
import HeroSection from '../components/HeroSection'
import "../components/Hero.css";
import ProductYouLike from '../components/ProductYouLike';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      {/* <Header /> */} 

      <h1>Set Header with next links remove everything related to react routing use Next Routes</h1>

      <HeroSection />
      <div className='hero hidden sm:w-full sm:h-screen sm:block '>

      </div>
      <ProductYouLike />
      <Footer />
    </div>
  )
}