import React from 'react'
// import LOGO from "../assets/LOGO.png"
// import LOGO2 from "../assets/LOGO2.png"
import "./Hero.css";

const HeroSection = () => {
  return (
    <div>
      <img src="./Banner.jpeg" alt="Hero Section" className='sm:hidden' />
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
