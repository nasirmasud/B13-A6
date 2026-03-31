import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='text-white bg-[#101727] py-5'>
      <footer className='footer sm:footer-horizontal text-white p-10 container mx-auto'>
        <aside className='max-w-xs'>
          <h1 className='text-4xl font-bold'>DigiTools</h1>
          <p>
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav className='ml-auto'>
          <h6 className='footer-title'>Social Links</h6>
          <div className='grid grid-flow-col gap-4'>
            <div className='badge bg-slate-200 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>
              <FaInstagramSquare className='text-black h-6 w-6' />
            </div>
            <div className='badge bg-slate-200 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>
              <FaFacebookSquare className='text-black h-6 w-6' />
            </div>
            <div className='badge bg-slate-200 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>
              <FaSquareXTwitter className='text-black h-6 w-6' />
            </div>
          </div>
        </nav>
      </footer>

      <footer className='footer sm:footer-horizontal text-white items-center p-4 container mx-auto border-t border-gray-700'>
        <aside className='grid-flow-col items-center'>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
          <a className='link link-hover'>Privacy Policy</a>
          <a className='link link-hover'>Terms of Service</a>
          <a className='link link-hover'>Cookies</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
