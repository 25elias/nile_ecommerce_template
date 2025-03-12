import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 ">
      {/* header title */}

      <div className="text-center space-y-4 mb-4">
        <h2 className='text-3xl text-gray-900 font-bold tracking-widest uppercase pt-4 pb-4'>New Arival</h2>
        <p className='text-xs text-gray-600 font-semibold pb-4 tracking-wider'>
        Promotion new products and sales, Directly to you.</p>
      </div>
      <div className="text-center max-w-xl mx-auto mb-8">
        <form className="flex items-center gap-4">
          <input type="email" placeholder="Enter your email"
          className="w-full border border-slate-200 py-3 px-4"/>

          <button className="py-3 px-4 bg-black border border-transparent
              text-gray-100 font-semibold box-border hover:bg-white hover:border border-gray-900 hover:text-black">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
