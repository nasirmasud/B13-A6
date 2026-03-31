import React from "react";
import { FaCheck } from "react-icons/fa";
import { FcOldTimeCamera } from "react-icons/fc";

const ProductCard = ({ models }) => {
  return models.map((model) => (
    <div className='hover-3d '>
      <figure className='w-96 rounded-2xl'>
        <div className='card w-96 bg-base-100 shadow-sm border border-slate-100 rounded-2xl'>
          <div className='card-body'>
            <span className='badge badge-xs badge-warning ml-auto'>
              {model.tag}
            </span>
            <div className='w-12 h-12 rounded-full border border-slate-100 shadow-sm flex items-center justify-center p-2'>
              <img
                src={model.icon}
                alt={model.tagType}
                className='object-fit'
              />
            </div>
            <h3 className='text-2xl font-bold text-slate-900'>{model.name}</h3>
            <p className='text-[16px] text-slate-600'>{model.description}</p>
            <p className='text-xl font-bold'>${model.price}/mo</p>

            <ul className='mt-6 flex flex-col gap-2 text-xs'>
              {model.features.map((feature, index) => (
                <li
                  key={index}
                  className='flex justify-start items-center gap-2'
                >
                  <FaCheck className='text-green-500' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className='mt-6'>
              <button className='btn rounded-full w-full h-14 bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] text-white  border-none font-semibold text-lg hover:bg-[#6d28d9]'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </figure>
    </div>
  ));
};

export default ProductCard;
