import React from "react";
import ProductPage from "../components/Products/ProductPage";


const Featured = () => {
  return (
    <div>
      <div className="bg-slate-100 py-32 text-center">
        <h1 className="text-4xl text-gray-900 font-semibold tracking-widest pt-8 pb-4">
          Featured
        </h1>
        <p className=" text-gray-900 font-semibold tracking-widest">
          Home | Featured
        </p>
      </div>
	  {/* replace with featured products  */}
      <ProductPage />
    </div>
  );
};

export default Featured;
