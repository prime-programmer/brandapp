import React from 'react';


const Hero = () => {
  return (
    
<div className=''>
      <img src={require('../images/watch1.jpg')} alt='hero' className='shrink'/>
      <div className='hidden lg:flex absolute top-40 right-80 w-full h-full flex-col items-center justify-center '>
        <h1 className=' text-3xl text-[#ffffff] max-w-xl font-serif'>
        <span className='text-8xl '>40% OFF</span>
        <p className=''>ON ALL LUXURY BRANDS</p><p className=''>MEN'S FALL COLLECTION</p> 
        <p className=''><button className='text-black bg-white  p-3 w-full'>SHOP NOW</button></p></h1>
    </div>
    
</div>
      
    
  );
};

export default Hero;
