import React, { use } from "react";
import ProductCard from "./ProductCard";
import CartList from "./CartList";

const ProductCollection = ({ modelPromise }) => {
  const models = use(modelPromise);

  return (
    <div className='container mx-auto space-y-5 pb-20'>
      <h2 className='text-5xl font-bold text-center text-slate-900'>
        Premium Digital Tools
      </h2>
      <p className='text-[16px] text-center text-slate-600'>
        Choose from our curated collection of premium digital products designed
        <br />
        to boost your productivity and creativity.
      </p>
      <div className='flex justify-center mt-6'>
        <div className='inline-flex  border border-slate-300 rounded-full'>
          <button className='btn bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] text-white rounded-full px-4 py-2'>
            Products
          </button>
          <button className='btn bg-transparent border-none rounded-full px-4 py-2 text-black'>
            Cart (2)
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-8 justify-items-center mt-12'>
        <ProductCard models={models} />
      </div>
      <div className='gap-y-10 justify-items-center mt-12 px-20 hidden'>
        <CartList />
      </div>
    </div>
  );
};

export default ProductCollection;
