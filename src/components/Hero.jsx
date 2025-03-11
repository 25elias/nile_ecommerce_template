import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='max-w-5xl mx-auto h-full'>
        {/* hero contet */}
        <div className='w-full h-full flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='w-full h-full  pt-52 px-4 sm:pl-20 text-center md:text-start '>
                <h1 className='text-7xl leading-[1] tracking-widest font-bold py-8'>Fashion</h1>
                <p className='text-3xl tracking-widest font-bold'>Got a new style</p>
                <button to='./products' className='py-3 px-4 inline-flex items-center gap-2 bg-black border border-transparent
                 text-gray-100 font-semibold box-border hover:bg-white hover:border hover:text-black mt-2'>
                    Go shopping <FaArrowRightLong className='w-4 h-4' />
                </button>
            </div>
            <div className='w-full max-h-[400px] sm:min-h-[500px] pl-4 py-8'>
                <img src="../assets/home.png" alt=""
                 className='max-h-[400px] sm:min-h-[500px]'  />
            </div>
        </div>

    </div>
  )
}

export default Hero