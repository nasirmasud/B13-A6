import React from "react";

const Transform = () => {
  return (
    <div className='bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] py-32 px-5 my-10 mb-28 text-white'>
      <h2 className='text-[40px] font-bold text-center '>
        Ready to Transform Your Workflow?
      </h2>
      <p className='text-[16px] text-center text-gray-200 py-4'>
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>
      <div className='flex gap-3 justify-center pt-10'>
        <button className='btn text-[#6130f7] rounded-3xl text-[16px]'>
          Explorer Products
        </button>
        <button className='btn bg-transparent border border-gray-100 text-gray-100 rounded-3xl text-[16px]'>
          View Pricing
        </button>
      </div>
      <p className='text-[16px] text-center text-gray-200 py-4'>
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default Transform;
