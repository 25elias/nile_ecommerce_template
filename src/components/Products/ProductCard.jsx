import React from 'react'
import { Link } from 'react-router'

import { FaStar, FaHeart, FaCartPlus } from "react-icons/fa6";

const ProductCard = ({product}) => {
  return (
        <Link className='w-full h-max space-y-4 bg-white shadow-md'>
            {/* image - icons */}
            <div className='relative w-full bg-slate-200'>
                <img src={product.image} alt="" />
                <div className='bg-white absolute top-4 left-4 font-[500] py-2 px-3 rounded-full shadow-sm text-sm ' >
                    {'50% off'}
                </div> 
                <div className="absolute right-4 top-4 flex items-center flex-col gap-2">
                    <button className='bg-white p-2 rounded-full'>
                        <FaHeart className='w-4 h-4 text-gray-700' />
                    </button>
                    <button className='bg-white p-2 rounded-full'>
                        <FaCartPlus className='w-4 h-4 text-gray-700' />
                    </button>
                </div>

            </div>
            {/* product details */}
            <div className='px-4 pb-4 space-y-4'>
                <div className='flex items-center justify-between text-sm'>
                    <p className='text-gray-600 tracking-wide'>Cloths</p>
                    <div  className='flex items-center gap-2'>
                        <FaStar className='w-4 h-4 text-yellow-500' />
                        <p className='text-gray-600 tracking-wide'>4.8</p>
                    </div>
                </div>
                <p className='text-gray-900 font-semibold tracking-wide hover:underline underline-offset-2 cursor-pointer'>{product.name}</p>
                <p className='text-xl text-gray-900 tracking-wide'>{product.price}</p>
            </div>
        </Link>
  )
}

export default ProductCard;