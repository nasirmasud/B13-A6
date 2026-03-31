import React from "react";
import { FaCheck } from "react-icons/fa";
import { FcOldTimeCamera } from "react-icons/fc";

const Pricing = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold text-center text-slate-900'>
        Get Started in 3 Steps
      </h2>
      <p className='text-[16px] text-center text-slate-600 py-4'>
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-8 justify-items-center mt-12 container mx-auto pb-28'>
        <div className='card w-96 bg-base-100 shadow-sm border border-slate-100 rounded-2xl bg-white'>
          <div className='card-body'>
            <h3 className='text-2xl font-bold '>Starter</h3>
            <p className='text-[16px] text-gray-500'>
              Perfect for getting started
            </p>
            <p className='text-[40px] font-bold'>
              $0/<span className='text-2xl'>Month</span>{" "}
            </p>

            <ul className='mt-6 flex flex-col gap-2 text-xs'>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Access to IO free tools</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Basic templates</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Community support</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>1 project per month</span>
              </li>
            </ul>
            <div className='mt-6'>
              <button className='btn btn-primary rounded-full w-full h-14 text-lg bg-gradient-to-tr from-[#622ff7] to-[#9315fa] text-white font-bold border-nonetext-lg hover:bg-[#]'>
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-sm border border-slate-100 rounded-2xl bg-gradient-to-tr from-[#622ff7] to-[#9315fa] text-white'>
          <div className='card-body'>
            <span className='badge badge-xs bg-yellow-200 mx-auto -m-10 text-sm p-3 rounded-4xl mb-4'>
              Most Popular
            </span>
            <h3 className='text-2xl font-bold '>Pro</h3>
            <p className='text-[16px] text-gray-300'>Best for professionals</p>
            <p className='text-[40px] font-bold'>
              $29/<span className='text-2xl'>Month</span>{" "}
            </p>

            <ul className='mt-6 flex flex-col gap-2 text-xs'>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Access to all premium tools</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Unlimited templates</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Priority support</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Unlimited projects</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Cloud sync</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Advanced analytics</span>
              </li>
            </ul>
            <div className='mt-6'>
              <button className='btn btn-primary rounded-full w-full h-14 bg-white text-[#6d28d9] font-bold border-none font-semibold text-lg hover:bg-[#]'>
                Start Pro Trial
              </button>
            </div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-sm border border-slate-100 rounded-2xl bg-white'>
          <div className='card-body'>
            <h3 className='text-2xl font-bold '>Enterprise</h3>
            <p className='text-[16px] text-gray-500'>
              For teams and businesses
            </p>
            <p className='text-[40px] font-bold'>
              $99/<span className='text-2xl'>Month</span>{" "}
            </p>
            <ul className='mt-6 flex flex-col gap-2 text-xs'>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Everything in Pro</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Team collaboration</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Custom integrations</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Dedicated support</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>SLA guarantee</span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaCheck className='text-green-500' />
                <span>Custom branding</span>
              </li>
            </ul>
            <div className='mt-6'>
              <button className='btn btn-primary rounded-full w-full h-14 text-lg bg-gradient-to-tr from-[#622ff7] to-[#9315fa] text-white font-bold border-nonetext-lg hover:bg-[#]'>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
