import React from "react";

const AppStatus = () => {
  return (
    <div className='bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] py-10 px-5 my-10'>
      <div className='flex flex-col lg:flex-row justify-center gap-4 items-center text-white lg:gap-32'>
        <div className='text-center flex flex-col'>
          <h2 className='text-4xl lg:text-5xl font-bold'>50K+</h2>
          <p className='text-lg opacity-80 mt-2'>Active Users</p>
        </div>
        <div className='w-lg h-[1px] bg-white/30 lg:hidden my-4'></div>
        <div className='hidden lg:block w-[1px] h-16 bg-white/50'></div>
        <div className='text-center'>
          <h2 className='text-4xl lg:text-5xl font-bold'>200+</h2>
          <p className='text-lg opacity-80 mt-2'>Premium Tools</p>
        </div>
        <div className='w-lg h-[1px] bg-white/30 lg:hidden my-4'></div>
        <div className='hidden lg:block w-[1px] h-16 bg-white/50'></div>
        <div className='text-center'>
          <h2 className='text-4xl lg:text-5xl font-bold'>4.9</h2>
          <p className='text-lg opacity-80 mt-2'>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default AppStatus;
