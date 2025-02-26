import React from "react";
import { Link } from "react-router";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl px-8 mt-8 pt-12">
      {/* header title */}
      <div className="text-center space-y-4 mb-4">
        <h2 className='text-3xl text-gray-900 font-bold tracking-widest uppercase pt-4 pb-4'>Featured Product</h2>
        <Link 
        key="products"
        to="/products"        
        className='text-xs text-gray-600 font-semibold pb-4 tracking-wider underline underline-offset-2'>View All</Link>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between flex-grow items-center space-y-8 gap-4">
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default FeaturedProducts;
