"use client";
import React from "react";
import Image from "next/image";


const Hero: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col w-full">
            <h1 className="text-[26px] md:text-[50px] lg:text-[96px] font-bold text-[#292830] leading-[100%]">
              Track your Expenses to Save Money
            </h1>
            <p className="font-normal my-6  text-[24px] text-[#BDBDBD] pb-3">
              Helps you to organize your income and expenses
            </p>
            <div className="flex items-center gap-5">
              <select className="bg-[#FF7235] text-[#FFFFFF] py-[18px] outline-0 pl-6 pr-10 text-[24px] font-normal rounded-lg w-[270px] appearance-none drop-icon">
                <option value="">Demo 1</option>
                <option value="">Demo 2</option>
                <option value="">Demo 3</option>
              </select>

              
              <span className="text-[24px] font-normal text-[#BDBDBD]">
                — Web, iOs and Android
              </span>
            </div>
          </div>

          {/* ........ right image ...........  */}
          <div className="col w-full flex justify-end items-center">
            <Image
              src="/Illustration.png"
              alt="Xpense Illustration"
              width={538.2}
              height={0}
              className="object-contain w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
