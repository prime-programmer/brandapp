import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black mx-auto -mt-10 py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#ad5d28]'>Address:</h1>
        <p className='py-4'>112 Lorem Ipsum Drive Saville Road London</p>
        <p className='py-4'>LN15 7DZ</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        
        <ul>
            <li className='py-2 text-sm'>Gift Cards</li>
            <li className='py-2 text-sm'>Order Tracking</li>
            <li className='py-2 text-sm'>Return Policy</li>
            <li className='py-2 text-sm'>Email Sign Up</li>
        </ul>
    </div>
    <div>
        
        <ul>
            <li className='py-2 text-sm'>Customer Service</li>
            <li className='py-2 text-sm'>Collection</li>
            <li className='py-2 text-sm'>Join Our Team</li>
            <li className='py-2 text-sm'>Susidiaries</li>
        </ul>
    </div>
    <div>
        
        <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
      
    </div>
  );
};

export default Footer;