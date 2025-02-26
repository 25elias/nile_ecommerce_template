import React from "react";
import NewProduct from "./NewProduct";
import { Link } from "react-router";

const NewProducts = () => {
  return (
    <div className="max-w-5xl mx-auto h-full py-12">
        {/* header title */}
      <div className="text-center space-y-4 mb-4">
        <h2 className='text-3xl text-gray-900 font-bold tracking-widest uppercase pt-4 pb-4'>New Arrival</h2>
        <Link 
        key="products"
        to="/products"        
        className='text-xs text-gray-600 font-semibold pb-4 tracking-wider underline underline-offset-2'>View All</Link>
      </div>

      {/* new product list */}
      <div className="grid place-content-center">
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
        <NewProduct />
      </div>
    </div>
  );
};

export default NewProducts;
