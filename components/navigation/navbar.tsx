"use client"

import { ModeToggle } from "@components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import logo from "@public/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapIcon } from "lucide-react";
import { Button } from "@ui/button";
import { SiLinktree, SiWhatsapp } from "react-icons/si";
import { AboutToggle } from "@components/about-toggle";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@components/ui/dropdown-menu";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const handleNav = () => {
        setIsOpen(!isOpen);
    }
    const handleAbout = () => {
        setAboutOpen(!aboutOpen);
        }

    return (  
        <nav className="fixed w-full h-24 shadow-xl z-[999] dark:bg-black bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/"> <Image src={logo} alt="Obaid Gases LLC Logo" height={75} width={205} className="cursor-pointer dark:text-white" priority/> </Link>
                <div className="hidden sm:flex">
                    <ul className="flex items-center mr-2">
                        <li className="p-2 hover:text-blue-500"> <Link href={'/'}>Home</Link> </li>
                        <li className="p-2 hover:text-blue-500"> <AboutToggle /> </li>
                        <li className="p-2 hover:text-blue-500"> <Link href={'/products'}>Products</Link> </li>
                        <li className="p-2 hover:text-blue-500"> <Link href={'/faq'}>FAQ</Link> </li>
                        <li className="p-2 hover:text-blue-500"> <Link href={'/contact'}>Contact</Link> </li>
                        <li className="p-2 hover:text-blue-500"> <Button>Order Now</Button> </li>
                        <li className="p-2"> <ModeToggle /> </li>
                    </ul>
                </div>
                <div className="flex items-center sm:hidden cursor-pointer">
                    <div onClick={handleNav} className="mr-4 dark:text-white">
                        <AiOutlineMenu size={25} />
                    </div>
                    <ModeToggle />
                </div>
                <div className={
                    isOpen
                        ? "fixed left-0 top-0 w-[65%] sm:hidden h-full dark:bg-gray-600 bg-gray-300 p-10 ease-in duration-500 z-[auto]"
                        : "fixed left-[-100%] top-0 dark:bg-gray-600 bg-gray-300 p-10 h-full ease-in duration-500" }>
                    <div className="flex w-full items-center justify-end">
                        <div className="cursor-pointer" onClick={handleNav} >
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className="flex-col">
                        <ul>
                            <li className="py-2 hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}> <Link href={'/'}>Home</Link> </li>
                            <li className="py-2 hover:text-blue-500"> 
                                <DropdownMenu open={aboutOpen}>
                                    <DropdownMenuTrigger asChild>
                                        <div onClick={handleAbout} className="cursor-pointer">About</div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="z-[1000]">
                                        <DropdownMenuLabel> About Us </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={handleNav}>
                                            <Link href={'/about/obaidgasesllc'} onClick={handleAbout}>About Obaid Gases LLC</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={handleNav}>
                                            <Link href={'/about/managingdirector'} onClick={handleAbout}>About Managing Director</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li className="py-2 hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}> <Link href={'/products'}>Products</Link> </li>
                            <li className="py-2 hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}> <Link href={'/faq'}>FAQ</Link> </li>
                            <li className="py-2 hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}> <Link href={'/contact'}>Contact</Link> </li>
                            <li className="py-2 hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}> <Button>Order Now</Button> </li>
                        </ul>
                        <div className="flex justify-between py-2"> 
                            <Link href={"https://www.instagram.com/obaid.gases"} ><Instagram scale={2} /></Link>
                            <Link href={"https://www.facebook.com/people/Obaid-Gases-LLC/61555256337159/"} ><Facebook scale={2} /></Link>
                            <Link href={"https://www.linkedin.com/company/obaid-gases-llc"} ><Linkedin scale={2} /></Link>
                            <Link href={"https://maps.app.goo.gl/AwBdFxHf8Ngi2rUN7"} ><MapIcon scale={2} /></Link>
                        </div>
                        <div className="flex justify-between py-2">
                            <Link href={"https://linktr.ee/obaid.gases"}> <SiLinktree size={24} /></Link>
                            <Link href={"https://wa.me/971506388772"}> <SiWhatsapp size={24} /> </Link>
                            <Link href={"mailto:obaidgases@gmail.com"}> <Mail scale={2} /> </Link>
                        </div>
                        <div className="py-4">
                            <Link href="/" onClick={handleNav}> <Image src={logo} alt="Obaid Gases LLC Logo" height={75} width={205} className="cursor-pointer dark:text-white" priority/> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;