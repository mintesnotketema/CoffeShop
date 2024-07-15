import React from 'react'
import HImg from "../assets/coffee2.png"

const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark
     flex justify-center items-center text-white'>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text Conntent section */}
                <div className='order-2 sm:order-1'>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                     We serve the richest <span className='text-primary
                     font-cursive'>Coffe</span> in the city
                    </h1>
                    <div>
                        <button className='bg-gradient-to-r from-primary to-secondary border-2
                        border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200'>
                            Coffe And Code
                        </button>
                    </div>
                </div>
            {/* image Section */}
            <div className='sm:min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                <img src={HImg} alt=''
                className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin'/>
                <div className='bg-gradient-to-r from-primary to-secondary
                absolute p-3 top-10 left-10 rounded-xl'>
                    <h1>Hey Coder</h1>
                </div>
                <div className='bg-gradient-to-r from-primary to-secondary 
                absolute p-3 bottom-10 right-10 rounded-xl'>
                    <h1>Best Coffee</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
