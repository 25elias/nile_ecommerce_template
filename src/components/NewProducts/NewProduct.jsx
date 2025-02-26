import React from "react";
import { Link } from "react-router";

const NewProduct = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="new-top relative w-[250px] h-[250px] bg-slate-100 hover:bg-slate-300 transition duration-200">
          <img src="../assets/new1.png" alt="new1.png" />

        <div className="new-bottom w-[250px] h-[250px] absolute text-center place-content-center  z-[100]">
          <Link
            className="py-3 px-4 bg-black border border-transparent
            text-gray-100 font-semibold box-border hover:bg-white hover:border hover:text-black mt-2"
          >
            View Product
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
