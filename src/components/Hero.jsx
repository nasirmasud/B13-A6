import React from "react";
import { CiPlay1 } from "react-icons/ci";
import bannerImg from "../assets/banner.png";
import blinkImg from "../assets/blink.png";

const Hero = () => {
  return (
    <div className='hero py-20 container mx-auto'>
      <div className='hero-content flex-col lg:flex-row-reverse lg:justify-between w-full'>
        <img src={bannerImg} className='max-w-sm rounded-lg shadow-2xl' />
        <div>
          <p className='btn text-[16px] bg-slate-200 rounded-full'>
            <span className='bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] bg-clip-text text-transparent flex gap-2 justify-between items-center'>
              <img src={blinkImg} alt='blink' className='w-5 h-5' />
              New: AI-Powered Tools Available
            </span>
          </p>
          <h1 className='text-4xl lg:text-7xl text-slate-800 font-bold'>
            Supercharge Your
            <br />
            Digital Workflow
          </h1>
          <p className='py-6 text-[16px] text-slate-600'>
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div className='flex gap-3'>
            <button className='btn bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] text-primary-content rounded-3xl text-[16px]'>
              Explorer Products
            </button>
            <button className='btn bg-transparent border border-gray-700 text-slate-800 rounded-3xl text-[16px]'>
              <CiPlay1 className='text-xl' /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
