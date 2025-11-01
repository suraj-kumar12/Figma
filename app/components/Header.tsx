"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="py-4 shadow-md sticky top-0 bg-white z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
          <Image
            src="/X.png" 
            alt="Xpense Logo"
            width={40}           
            height={40}           
            className="object-contain"
          />
          <span className="text-[23px] text-[#292830] font-medium">pense</span>
        </Link>
        <ul className=" hidden md:flex gap-10 items-center">
          <li><Link href="" className="text-[#292830] text-[18px] font-normal">Features</Link></li>
          <li><Link href="" className="text-[#292830] text-[18px] font-normal">About us</Link></li>
          <li><Link href="" className="text-[#292830] text-[18px] font-normal">Pricing</Link></li>
          <li><Link href=""className="text-[#292830] text-[18px] font-normal">Feedback</Link></li>
        </ul>
        
          <Link href="" className="hidden md:inline-block  text-[#FF7235] border border-[#FF7235] text-[18px]  px-5 py-2 rounded-md font-normal hover:bg-[#FF7235] hover:text-[#ffffff]">Request a demo</Link>
          {/* Mobile Menu Icon */}
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="md:hidden text-[#292830] text-2xl focus:outline-none"
             aria-label="Toggle menu"
           >
           {isOpen ? <FaTimes /> : <FaBars />}</button>
        
        </div>


        {isOpen && (
           <div className="md:hidden mt-4 bg-white rounded-lg shadow-md p-4 space-y-4">
             <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-[#292830] text-[18px] font-normal">Features</Link></li>
               <li><Link href="#" className="text-[#292830] text-[18px] font-normal">About us</Link></li>
               <li><Link href="#" className="text-[#292830] text-[18px] font-normal">Pricing</Link></li>
               <li><Link href="#" className="text-[#292830] text-[18px] font-normal">Feedback</Link></li>
             </ul>
             <Link
               href="#"
               className="block text-center text-[#FF7235] border border-[#FF7235] text-[18px] px-5 py-2 rounded-md font-normal hover:bg-[#FF7235] hover:text-white transition"
             >
               Request a demo
             </Link>
           </div>
       )}
      </div>
    </header>
  )
}

export default Header;

