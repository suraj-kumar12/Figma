"use client";
import React from "react";
import Image from "next/image";


const Hero: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="col w-full">
            <h1 className="text-[32px] md:text-[50px] lg:text-[96px] font-bold text-[#292830] leading-[100%]">
              Track your Expenses to Save Money
            </h1>
            <p className="font-normal my-6  lg:text-[24px] md:text-[18px] text-[#BDBDBD] pb-3">
              Helps you to organize your income and expenses
            </p>
            <div className="flex items-center gap-2">
              <select className="bg-[#FF7235] text-[#FFFFFF] pl-3 lg:py-[18px] md:py-3 py-2 px-10 outline-0 lg:pl-6 md:pl-3 lg:pr-10 md:pr-0 lg:text-[24px] md:text-[16px] font-normal rounded-lg lg:w-[270px] md:w-[115px] appearance-none drop-icon">
                <option value="">Demo 1</option>
                <option value="">Demo 2</option>
                <option value="">Demo 3</option>
              </select>

              
              <span className="lg:text-[24px] md:text-[18px] font-normal text-[#BDBDBD]">
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
