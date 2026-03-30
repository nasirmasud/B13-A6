import React from "react";
import { FaCheck } from "react-icons/fa";
import { FcOldTimeCamera } from "react-icons/fc";

const ProductCard = () => {
  return (
    <div className='hover-3d '>
      <figure className='w-96 rounded-2xl'>
        <div className='card w-96 bg-base-100 shadow-sm border border-slate-100 rounded-2xl'>
          <div className='card-body'>
            <span className='badge badge-xs badge-warning ml-auto'>
              Most Popular
            </span>
            <div className='w-12 h-12 rounded-full border border-slate-100 shadow-sm flex items-center justify-center p-2'>
              <FcOldTimeCamera className='text-9xl' />
            </div>
            <h3 className='text-2xl font-bold text-slate-900'>
              Premium Stock Assets
            </h3>
            <p className='text-[16px] text-slate-600'>
              Access millions of royalty-free photos, videos, and graphics for
              your projects.
            </p>
            <p className='text-xl font-bold'>$29/mo</p>

            <ul className='mt-6 flex flex-col gap-2 text-xs'>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>High-resolution image generation</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>High-resolution image generation</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>High-resolution image generation</span>
              </li>
            </ul>
            <div className='mt-6'>
              <button className='btn btn-primary rounded-full w-full h-14 bg-[#7c3aed] text-white border-none font-semibold text-lg hover:bg-[#6d28d9]'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ProductCard;
