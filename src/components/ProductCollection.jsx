import React from "react";
import ProductCard from "./ProductCard";

const ProductCollection = () => {
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
      <div className='text-center'>
        <button className='btn'>Products</button>
        <button className='btn'>Cart (2)</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-8 justify-items-center mt-12'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductCollection;
