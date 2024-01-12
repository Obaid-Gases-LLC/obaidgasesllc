"use client";

import contactus from '@public/contact-us.png'
import Image from 'next/image'
import React,{ useState } from 'react';

const Contact = () => {
    const [formData,setFormData] = useState({
        email: '',
        phone: '',
        name: '',
        company: '',
        requirements: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    };
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            const response = await fetch('https://formspree.io/f/mpzvwpkp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            if (response.status === 200) {
                alert('Form submitted successfully');
                setFormData({
                    email: '',
                    phone: '',
                    name: '',
                    company: '',
                    requirements: '',
                })
            } else {
                alert('Form submission failed');
            }
        } catch (error) {
            console.log('Error submitting form : ',error);
        }
    };

    return (  
        <div>
            <div className='h-[260px] flex-row'>
                <div className='flex justify-center items-left flex-col p-4 font-bold text-4xl'>
                    <p>Contact</p>
                </div>
                <Image src={contactus} alt="Contact Us" height={190} />
            </div>
            <div className='p-4 font-bold text-xl w-full bg-slate-200 dark:bg-slate-500'>
                <span className="text-red-700 dark:text-red-400">Home </span> / Contact
            </div>
            <div className="flex flex-col items-center justify-center p-5">
                <form onSubmit={handleSubmit} className='text-base lg:text-lg font-normal leading-normal sm:w-[600px] border border-1 border-gray-300 rounded-lg p-12 relative shadow-2xl'>
                    <h1 className='flex text-2xl underline justify-center items-center'>Get In Touch</h1>
                    <div className="flex flex-col email">
                        <label htmlFor="frm-email">Email : </label>
                        <input type="email" id='frm-email' value={formData.email} onChange={handleChange} name='email' placeholder='Enter your email' autoComplete='email' required className='dark:text-black text-base px-2 lg:text-lg font-normal leading-normal mb-4 border border-solid border-gray-800 rounded bg-blue-100' />
                    </div>
                    <div className="flex flex-col phone">
                        <label htmlFor="frm-phone">Phone : </label>
                        <input type="text" id='frm-phone' value={formData.phone} onChange={handleChange} name='phone' placeholder='Enter your phone number' autoComplete='tel' required className='dark:text-black text-base px-2 lg:text-lg font-normal leading-normal mb-4 border border-solid border-gray-800 rounded bg-blue-100' />
                    </div>
                    <div className="flex flex-col name">
                        <label htmlFor="frm-name">Full Name : </label>
                        <input type="text" id='frm-name' value={formData.name} onChange={handleChange} name='name' placeholder='Enter your full name' autoComplete='given-name' required className='dark:text-black text-base px-2 lg:text-lg font-normal leading-normal mb-4 border border-solid border-gray-800 rounded bg-blue-100' />
                    </div>
                    <div className="flex flex-col company">
                        <label htmlFor="frm-company">Company Name : </label>
                        <input type="text" id='frm-company' value={formData.company} onChange={handleChange} name='company' placeholder='Enter your company name' autoComplete='organization' required className='dark:text-black text-base px-2 lg:text-lg font-normal leading-normal mb-4 border border-solid border-gray-800 rounded bg-blue-100' />
                    </div>
                    <div className="flex flex-col message">
                        <label htmlFor="frm-message">Requirements : </label>
                        <textarea name="requirements" id="frm-message" value={formData.requirements} onChange={handleChange} rows={6} placeholder="Enter your requirements " className='dark:text-black mb-4 px-2 border border-solid border-gray-800 rounded bg-blue-100 text-lg'></textarea>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;