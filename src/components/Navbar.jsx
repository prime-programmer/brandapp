

import React from 'react';


const Navbar = () => {
  

  return (
    <div className='bg-black flex justify-between text-white  mx-auto h-[90px] font-serif'>
      <div className='flex items-center space-x-5'>
      
      <h1 className='w-full text-4xl font-bold text-[#ad5d28]'>APPAREL</h1>
      <div className='hidden lg:flex'>
        <h2 className='p-4'>MENSWEAR</h2>
        <h2 className='p-4'>FOOTWEAR</h2>
        <h2 className='p-4'>ACCESORIES</h2>
        <h2 className='p-4'>SALE</h2>
      </div>
       
    </div>
   
     <div className='flex items-center space-x-5 m-4'>
     <button className='text-black bg-white px-4 py-1 rounded-md p-4'>SIGN UP</button>
     </div>
      
    </div>
  );
};

export default Navbar;