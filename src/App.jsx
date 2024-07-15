import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {

  useEffect(() => {
    Aos.init({
      offset:100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  })
  return (
    <div className='overflow-x-hidden'>
     <Navbar />
     <Home />
    </div>
  )
}

export default App
