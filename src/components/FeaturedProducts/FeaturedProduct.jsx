import React from "react";
import { Link } from "react-router";

const FeaturedProduct = () => {
  return (
    <div>
      <Link className="w-full py-4 space-y-4 md:space-y-0 text-center shadow-md hover:-translate-y-4 transition-all ease-in-out duration-200">
        <div className="relative bg-slate-100 w-full h-64">
          <img src="../assets/feature2.png" alt="" />
          <div className="absolute top-0 right-0 py-2 px-3 bg-blue-900 text-sm font-bold text-slate-100 uppercase">
            new
          </div>
        </div>
        <h3 className="text-lg text-gray-900 font-bold uppercase">
          SmartWatch F9
        </h3>
        <p className="text-sm text-gray-900 font-semibold">$80</p>
      </Link>
    </div>
  );
};

export default FeaturedProduct;
