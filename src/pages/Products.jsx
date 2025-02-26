import React from "react";
import ProductPage from "../components/Products/ProductPage";

const Products = () => {
  return (
    <div>
      <div className="bg-slate-100 py-32 text-center">
        <h1 className="text-4xl text-gray-900 font-semibold tracking-widest pt-8 pb-4">
          Products
        </h1>
        <p className=" text-gray-900 font-semibold tracking-widest">
          Home | Products
        </p>
      </div>
      <ProductPage />
    </div>
  );
};

export default Products;
