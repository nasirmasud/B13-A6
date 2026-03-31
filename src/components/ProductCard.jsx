import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ model, cartData, setCartData }) => {
  const [isPurchased, setIsPurchased] = useState(false);
  const handlePurchased = () => {
    setIsPurchased(true);
    setCartData([...cartData, model]);
  };

  return (
    <div className='hover-3d '>
      <figure className='w-96 rounded-2xl'>
        <div className='card w-96 bg-base-100 shadow-sm border border-slate-100 rounded-2xl'>
          <div className='card-body'>
            <span
              className={`badge badge-xs ml-auto font-medium ${
                model.tag === "Popular"
                  ? "bg-slate-200 text-slate-800"
                  : model.tag === "New"
                    ? "bg-green-200 text-green-900"
                    : "bg-yellow-200 text-yellow-900"
              }`}
            >
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
              <button
                onClick={handlePurchased}
                className={`btn rounded-full w-full h-14 text-white border-none font-semibold text-lg transition-all duration-300 ${
                  isPurchased
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    : "bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] hover:opacity-90"
                }`}
              >
                {isPurchased ? (
                  <span className='flex justify-between gap-3 items-center'>
                    <FaCheck /> Added to Cart
                  </span>
                ) : (
                  "Buy Now"
                )}
              </button>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ProductCard;
