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
        <div className="flex  justify-between mb-6">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/X.png" 
                alt="Xpense Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-[23px] text-[#292830] font-medium">
                pense
              </span>
            </Link>
          </div>
          <div>
            <h1 className="text-[24px] font-medium uppercase text-[#292830] mb-4">Links</h1>
            <ul>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Home</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">About us</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Careers</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Pricing</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Features</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h1 className="text-[24px] font-medium uppercase text-[#292830] mb-4">Legal</h1>
            <ul>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Terms of use</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Terms of conditions</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Privecy policy</Link></li>
                <li className="mb-2"><Link href="/" className="font-medium text-[18px] text-[#292830]">Cookie policy</Link></li>
            </ul>
          </div>
          <div>
            <h1 className="text-[24px] font-medium uppercase text-[#292830] mb-4">Newsletter</h1>
            <p className="font-normal text-[20px] text-[#BDBDBD] mb-3">Over 25000 people have subscribed</p>
            <div className="relative pt-">
                <input type="email" placeholder="Enter your email" className="text-[#292830] text-[18px] font-normal bg-[#FFFFFF] border border-[#292830] placeholder-[#292830] rounded-lg py-4 px-4 w-full pr-[114px]"/>
                <button className="font-semibold text-[16px] absolute top-1.5 right-2 bg-[#FF7235] py-3 px-3 rounded-md text-[#FFFFFF]">Subscribe</button>
                <p className="font-normal text-[14px] text-[#BDBDBD] pt-2">We don’t sell your email and spam</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex justify-between mt-3">
            <div className="flex gap-6">
                <Link href="" className="font-normal text-[14px] text-[#292830]">Privacy & Terms</Link>
                <Link href="" className="font-normal text-[14px] text-[#292830]">Contact Us</Link>
            </div>
            <p className="font-normal text-[14px] text-[#292830]">Copyright @ 2022 xpence</p>

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
