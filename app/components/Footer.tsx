import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-16 pt-8">
      <div className="container mx-auto px-4">
        <div className=" md:flex  justify-between  mb-6">
          <div className="mb-4">
            {/* <div className="flex md:hidden justify-between"> */}
            <Link href="/" className="flex items-center lg:gap-2 md:gap-1 gap-1 ">
          <Image
            src="/X.png" 
            alt="Xpense Logo"
            width={40}           
            height={40}           
            className="object-contain md:w-7 lg:w-10"
          />
          
          <span className="lg:text-[23px] md:text-[20px] text-[20px] text-[#292830] font-medium">pense</span>
        </Link>
          </div>

          <div className="sm:flex justify-between">
          <div>
            <h1 className="lg:text-[24px] md:text-[16px] text-[20px] font-medium uppercase text-[#292830] mb-4">Links</h1>
            <ul>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Home</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">About us</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Careers</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Pricing</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Features</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Blog</Link></li>
            </ul>
          </div>
          {/* </div> */}
          <div>
            <h1 className="lg:text-[24px] md:text-[16px] text-[20px] font-medium uppercase text-[#292830] mb-4">Legal</h1>
            <ul>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Terms of use</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Terms of conditions</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Privecy policy</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium lg:text-[18px] md:text-[14px] text-[#292830]">Cookie policy</Link></li>
            </ul>
          </div>

          </div>
          <div>
            <h1 className="lg:text-[24px] md:text-[16px] text-[20px] font-medium uppercase text-[#292830] mb-4">Newsletter</h1>
            <p className="font-normal lg:text-[20px] md:text-[14px] text-[#BDBDBD] mb-3">Over 25000 people have subscribed</p>
            <div className="relative pt-">
                <input type="email" placeholder="Enter your email" className="text-[#292830] lg:text-[18px] md:text-[14px] font-normal bg-[#FFFFFF] border border-[#292830] placeholder-[#292830] rounded-lg lg:py-4 md:py-2 py-2 px-3 lg:px-4 md:px-2 lg:w-full md:w-[90%] w-[90%] lg:pr-[114px] md:pr-[95px] pr-[95px]"/>
                <button className="font-semibold lg:text-[16px] md:text-[12px] absolute right-10 top-1 lg:top-1.5 lg:right-2 md:top-1 md:right-9 bg-[#FF7235] lg:py-3 md:py-1.5 py-1 lg:px-3 md:px-1.5 px-1 rounded-md text-[#FFFFFF]">Subscribe</button>
                <p className="font-normal lg:text-[14px] md:text-[12px] text-[10px] text-[#BDBDBD] pt-2">We don’t sell your email and spam</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="md:flex justify-between mt-3 mb-3">
            <div className="flex gap-6 mb-2">
                <Link href="" className="font-normal text-[14px] text-[#292830]">Privacy & Terms</Link>
                <Link href="" className="font-normal text-[14px] text-[#292830]">Contact Us</Link>
            </div>
            <p className="font-normal text-[14px] text-[#292830] mb-2">Copyright @ 2022 xpence</p>

            <div className="flex gap-3">
                <Link href=""><FaFacebookSquare /></Link>
                <Link href=""><FaTwitterSquare /></Link>
                <Link href=""><FaLinkedin /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
