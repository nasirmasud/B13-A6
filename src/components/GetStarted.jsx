import React from "react";
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className='bg-slate-100 py-32 px-5 my-10 mb-28'>
      <h2 className='text-5xl font-bold text-center text-slate-900'>
        Get Started in 3 Steps
      </h2>
      <p className='text-[16px] text-center text-slate-600 py-4'>
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-8 justify-items-center mt-12 container mx-auto'>
        <div className='card bg-base-100 w-96 shadow-sm bg-white pb-20'>
          <div className='card-body'>
            <div className='badge bg-[#7433db] text-white rounded-full w-8 h-8 ml-auto'>
              01
            </div>
            <div className='badge bg-slate-200 text-white rounded-full w-24 h-24 mx-auto'>
              <img src={userImg} alt='blink' className='w-12 h-12' />
            </div>
            <h3 className='text-2xl font-bold text-center py-4'>
              Create Account
            </h3>
            <p className='text-[16px] text-slate-500 text-center'>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className='card bg-base-100 w-96 shadow-sm bg-white pb-20'>
          <div className='card-body'>
            <div className='badge bg-[#7433db] text-white rounded-full w-8 h-8 ml-auto'>
              02
            </div>
            <div className='badge bg-slate-200 text-white rounded-full w-24 h-24 mx-auto'>
              <img src={packageImg} alt='blink' className='w-12 h-12' />
            </div>
            <h3 className='text-2xl font-bold text-center py-4'>
              Choose Products
            </h3>
            <p className='text-[16px] text-slate-500 text-center'>
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
        <div className='card bg-base-100 w-96 shadow-sm bg-white pb-20'>
          <div className='card-body'>
            <div className='badge bg-[#7433db] text-white rounded-full w-8 h-8 ml-auto'>
              03
            </div>
            <div className='badge bg-slate-200 text-white rounded-full w-24 h-24 mx-auto'>
              <img src={rocketImg} alt='blink' className='w-12 h-12' />
            </div>
            <h3 className='text-2xl font-bold text-center py-4'>
              Start Creating
            </h3>
            <p className='text-[16px] text-slate-500 text-center'>
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
