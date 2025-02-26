import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Banner1 = () => {
  return (
    <div className='py-12 mt-4'>
        <div className='w-full banner-1 bg-no-repeat bg-cover bg-center '>
          <div className='bg-black/50 py-20 text-center '>
            <h2 className='text-3xl sm:text-6xl text-slate-100 font-bold tracking-widest pt-4 pb-2'>Special Offer</h2>
            <p className='text-sm text-slate-100 font-bold pt-6 pb-4 tracking-wider'>Special offers discount this week only for women.</p>
            <button className='py-3 px-4 inline-flex items-center gap-2 bg-black border border-transparent
                text-gray-100 font-semibold box-border hover:bg-white hover:border hover:text-black mt-2'>
                Shop Now <FaArrowRightLong className='w-4 h-4' />
            </button>
          </div>
        </div>
    </div>
  )
}

export default Banner1