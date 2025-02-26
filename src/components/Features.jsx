import React from 'react'
import { Link } from "react-router";
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';

const Features = () => {
  return (
    <div className='max-w-7xl mx-auto h-full mt-12 px-8'>
        {/* man - woman section */}
      <div className='max-w-5xl mx-auto h-full' >
        <div className=' flex flex-grow flex-col justify-between sm:flex-row gap-4'>
          <div className='w-full flex items-center justify-between gap-4 
          bg-slate-100 border border-gray-200 shadow-md hover:-translate-y-4 transition-all ease-in-out duration-200'>
            <div className='w-[210px] pt-2 pl-2 relative bottom-0'>
              <img src="../assets/backpackMan.png" alt="" />
            </div>
            <div className='w-full text-center'>
              <h2 className='text-lg text-gray-900 font-bold uppercase'>Men</h2>
              <p className='text-xl text-gray-900 font-bold uppercase'>Backpack</p>
              <Link 
                key="product" to="/products" 
                className='text-sm text-gray-500 underline underline-offset-4' >
                  View Collection
              </Link>
            </div>
          </div>
          <div className='w-full flex items-center justify-between gap-4 
          bg-slate-100 border border-gray-200 shadow-md hover:-translate-y-4 transition-all ease-in-out duration-200'>
            <div className='w-[210px] pt-2 pl-2'>
              <img src="../assets/backpackWoman.png" alt="" />
            </div>
            <div className='w-full text-center'>
              <h2 className='text-lg text-gray-900 font-bold uppercase'>Women</h2>
              <p className='text-xl text-gray-900 font-bold uppercase'>Backpack</p>
              <Link
                key="product" to="/products" 
                className='text-sm text-gray-500 underline underline-offset-4' >
                  View Collection
              </Link>
            </div>
          </div>
        </div>
        <div>
          <FeaturedProducts />
        </div>
      </div>

    </div>
  )
}

export default Features