import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({ setActiveTab, cartData }) => {
  const handleCartClick = () => {
    setActiveTab("cart");
    setTimeout(() => {
      const element = document.getElementById("cart-section");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className='navbar bg-base-100 container mx-auto border-b-1 border-gray-100 shadow-xl sticky top-0 z-50'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {" "}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex='-1'
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-medium text-slate-800'
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className='text-4xl font-bold text-[#672cf8]'>DigiTools</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-[16px] font-semibold text-slate-800'>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end flex gap-2'>
        <a onClick={handleCartClick} className='cursor-pointer indicator mr-2'>
          {cartData.length > 0 && (
            <span className='indicator-item badge badge-secondary badge-sm test-white px-2 rounded-full border-none bg-red-600'>
              {cartData.length}
            </span>
          )}
          <MdOutlineShoppingCart className='text-xl' />
        </a>
        <a className='text-[16px] font-medium'>Login</a>
        <a className='btn bg-gradient-to-r from-[#6130f7] to-[#9a1ffa] text-primary-content rounded-3xl text-[16px]'>
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
