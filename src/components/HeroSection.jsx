import React from 'react'
import "./Hero.css";

const HeroSection = () => {
  return (
    <div>
      <img src="/Banner.jpg" alt="Hero Section" className='sm:hidden' />
      <div className='aboveHero absolute sm:absolute w-full h-44 sm:h-screen flex justify-center items-center'>
        {/* <img src="" alt="PETRICHOR" /> */}
        <div className='text-center'>
        <h1 className='text-5xl sm:text-8xl'>PETRICHOR</h1>
        <p className='text-sm sm:text-lg'>The Essence of First Rain</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
