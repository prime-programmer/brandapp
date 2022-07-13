import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <p className="text-white">Your message has been successfully sent. We will get in touch shortly.</p>
    )
}

const Form = () => {
  const[result, showResult] = useState(false);
 
 const form = useRef();
 const handleSubmit = (e) => {
    
    e.preventDefault();
    

    emailjs.sendForm('service_dznlgjs', 'template_la7ux2m', form.current, 'RzeErQ-ixPYwxpguW')
    .then((result) => {
        console.log(result.text);
        console.log("Message sent")
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    showResult(true);
 }
  return (
    <div className="bg-orange-900">
     
     <form ref={form}  onSubmit={handleSubmit} className='flex flex-col p-5 max-w-2xl mx-auto mb-10'>
            <h3 className=' text-3xl font-bold text-white'>Contact Us</h3>
            <h4 className='text-lg text-white'>We will reply </h4>
            <hr className='py-3 mt-2'/>

            

            <label className='block mb-5'>
                <span className='text-white'>Name</span>
                <input  
                name="user_name"
                className='shadow border rounded py-2 px-3 
                form-input mt-1 block w-full ring-green-500 outline-none focus:ring' 
                placeholder='Name' type="text"/>
            </label>
            <label className='block mb-5'>
                <span className='text-white'>Email</span>
                <input 
                name="user_email"
                className='shadow border rounded py-2 px-3 form-input 
                mt-1 block w-full ring-green-500 outline-none focus:ring' 
                placeholder='your@email.com' type="email"/>
            </label>
            <label className='block mb-5'>
                <span className='text-white'>Comment</span>
                <textarea 
               name="message"
                className='shadow border rounded py-2 px-3 
                form-textarea mt-1 block w-full ring-green-500 outline-none focus:ring' 
                placeholder='' rows={9}/>
            </label>

            {/*code returns error when validation fails */}

           
           <input type="submit" className="shadow bg-gray-900 hover:bg-gray-600 focus:shadow-outline
           focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"/>
           <div>{result ? <Result/> : null}</div>
        </form>
    </div>
  );
}
 
export default Form;