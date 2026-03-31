import React from "react";
import { FcOldTimeCamera } from "react-icons/fc";

const CartList = ({ cartData, setCartData }) => {
  console.log(setCartData);

  return (
    <div className='container mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
      <h2 className='text-2xl font-bold text-slate-900 py-6'>Your Cart</h2>

      {/* Cart Items List */}
      <div className='space-y-4'>
        {cartData.map((item) => (
          <div className='flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-gray-50'>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm'>
                <img src={item.icon} alt={item.name} className='object-fit' />
              </div>
              <div>
                <h3 className='font-semibold text-slate-800'>{item.name}</h3>
                <p className='text-slate-500'>$29</p>
              </div>
            </div>
            <button className='text-pink-500 font-medium hover:text-pink-600 transition-colors'>
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className='mt-8 flex justify-between items-center border-t border-gray-100 pt-6'>
        <span className='text-slate-500 text-lg'>Total:</span>
        <span className='text-3xl font-bold text-slate-900'>$78</span>
      </div>

      {/* Checkout Button */}
      <button className='w-full mt-6 bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] text-white  font-bold py-4 rounded-full transition-all shadow-lg active:scale-95 cursor-pointer'>
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartList;
