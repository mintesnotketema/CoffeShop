import React from 'react'
import BannerImg from '../assets/coffee-white.png'
import BgTexture from '../assets/coffee-texture.jpg'
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width:"100%",
};


const Banner = () => {
  return (
    <>
    <div style={bgImage}>
      <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6' > 
                    {/* image section */}
                    <div>
                       <img src={BannerImg} alt='' className='max-w-[430px] w-full mx-auto spin 
                          drop-shadow-xl'/>
                    </div>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                      <h1 className='
                      text-3xl sm:text-4xl font-bold font-cursive'>Premium Blen Coffe</h1>
                      <p className='text-sm text-gray-500 tracking-wider leading-5'>
                      Une tasse de café have café crème or café au lait Un café allongé or un café Américain ith steamed
                       milk. It’s also ordered in the morning and very often
                      </p>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div className='space-y-5'>
                          <div className='flex items-center gap-3'>
                          <GrSecure  className='text-2xl h-12 w-12 shadow-sm p-3
                          rounded-full bg-red-100'/>
                          <span>Premium Coffee</span>
                          </div>
                          <div className='flex items-center gap-3'>
                          <IoFastFood  className='text-2xl h-12 w-12 shadow-sm p-3
                          rounded-full bg-red-100'/>
                          <span>Premium Coffee</span>
                          </div>
                          <div className='flex items-center gap-3'>
                          <GiFoodTruck  className='text-2xl h-12 w-12 shadow-sm p-3
                          rounded-full bg-red-100'/>
                          <span>Premium Coffee</span>
                          </div>
                        </div>
                        <div className='border-l-4 border-primary/50 pl-6 space-y-3'>
                          <h1 className='text-2xl font-semibold font-cursive'>
                            Tea Lover
                          </h1>
                              <p className='text-green-500 text-sm'>
                                Much like writhing code, brewing the 
                                perfect cup of tea require patience, 
                                precition and a dash of passion to creat
                                a comforthing blend of flavors
                              </p>
                        </div>
                      </div>
                    </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Banner
