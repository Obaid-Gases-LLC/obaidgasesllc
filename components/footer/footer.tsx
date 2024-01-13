"use client";

import React from 'react'
import Link from 'next/link'
import { Copyright } from 'lucide-react'
import GalleryFooter from '@components/footer/gallery-footer';
import { Facebook, Instagram, Linkedin, Mail, MapIcon } from "lucide-react";
import { SiLinktree, SiWhatsapp } from "react-icons/si";

const Footer = () => {
    return (
        <footer className='w-full bg-white dark:bg-black px-8 2xl:px-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="p-3">
                    <h1 className='font-bold text-2xl'>Obaid Gases LLC</h1>
                    <p className='text-sm p-2'>Obaid Gases LLC is a leading supplier of industrial, medical and specialty gases in the United Arab Emirates.</p>
                    <div className="flex gap-2 items-center justify-center">
                        <Link href={"https://www.instagram.com/obaid.gases"} ><Instagram scale={2} /></Link>
                        <Link href={"https://www.facebook.com/people/Obaid-Gases-LLC/61555256337159/"} ><Facebook scale={2} /></Link>
                        <Link href={"https://www.linkedin.com/company/obaid-gases-llc"} ><Linkedin scale={2} /></Link>
                        <Link href={"https://maps.app.goo.gl/AwBdFxHf8Ngi2rUN7"} ><MapIcon scale={2} /></Link>
                        <Link href={"https://linktr.ee/obaid.gases"}> <SiLinktree size={24} /></Link>
                        <Link href={"https://wa.me/971506388772"}> <SiWhatsapp size={24} /> </Link>
                        <Link href={"mailto:obaidgases@gmail.com"}> <Mail scale={2} /> </Link>
                    </div>
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-2xl">Safety Guide</h1>
                    <div>
                        <ul className='list-disc list-inside'>
                            <li className='p-2'>Handling</li>
                            <li className='p-2'>Storage</li>
                            <li className='p-2'>Transportation</li>
                            <li className='p-2'>Disposal</li>
                        </ul>
                    </div>
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-2xl">About Obaid Gases LLC</h1>
                    <ul className='list-disc list-inside'>
                        <li className='p-2'>About Us</li>
                        <li className='p-2'>FAQ</li>
                        <li className='p-2'>Services</li>
                        <li className='p-2'>Career</li>
                        <li className='p-2'>Contact Us</li>
                    </ul>
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-2xl">Gallery</h1>
                    <div className="flex justify-center items-center">
                        <div className="w-[200px] h-[200px] ">
                            <GalleryFooter />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='' />
            <div className='flex sm:flex-row flex-col justify-between items-center py-5'>
                <div className='flex flex-col '>
                    <p className='flex'>Copyright  <Copyright className='mx-1' /> </p>
                    <p> Obaid Gases LLC, All Rights Reserved</p>
                </div>
                <div className='sm:mt-0 mt-5'>
                    Designed By : 
                    <Link href='https://rahulab.vercel.app'>
                        <span className='text-gray-500 hover:text-blue-500'> Rahul A B</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer