"use client";
import React from "react";
import { MdOutlineCardTravel } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
const Pricing: React.FC = () => {
  return (
    <section className="md:py-16 py-0">
      <div className="container mx-auto px-4">
        <h1 className="md:text-[72px] text-[30px] font-bold text-[#292830] leading-[100%] text-center">
          Choose your flexible plan.
        </h1>
       
        <div className="md:flex justify-between items-center pt-16">
           {/* ..... first card  >>>>>>>>>>>>>>  */}
          <div className="group transition-all duration-300 hover:shadow-lg card border border-[rgba(0,0,0,0.1)] lg:p-16 md:p-7 p-8 mb-10">
            <p className="pb-5">
              <MdOutlineCardTravel className="text-[#3EC1F3] text-[24px]" />
            </p>
            <h2 className="font-semibold md:text-[20px] lg:text-[32px] text-[#292830] pb-5">Starter Plan</h2>
            <ul >
              <li className="font-normal md:text-[14px] lg:text-[18px] text-[#292830] flex  items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Store unlimited data
              </li>
              <li className="font-normal  md:text-[14px] lg:text-[18px] text-[#292830] flex  items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Export to pdf, xls, csv
              </li>
              <li className="font-normal md:text-[14px] lg:text-[18px] text-[#292830] flex items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Cloud server support
              </li>
            </ul>
            <div className="pt-6">
              <p className="font-semibold md:text-[18px] lg:text-[24px]">
                $9.99<span className="lg:text-[20px] md:text-[14px] font-light text-[#BDBDBD]">/year</span>
              </p>
              <span className="font-normal text-[12px] text-[#BDBDBD]">
                up to 3 user + 1.99 per user
              </span>
            </div>

            <div className="button pt-8">
              <button
                className="group-hover:bg-[#FF7235] group-hover:text-[#FFFFFF] text-[#FF7235] border border-[#FF7235 bg-[#FFFFFF] md:py-2 lg:py-3 lg:px-6 md:px-4 rounded-md lg:text-[16px] md:text-[12px] flex items-center gap-3 p-1"
              >
                Get this <FaLongArrowAltRight />
              </button>
            </div>
          </div>

    {/* ............... 2nd card >>>>>>>>>>>>>>>  */}
          <div className="group transition-all duration-300 hover:shadow-lg card border border-[rgba(0,0,0,0.1)] lg:p-16 md:p-7 p-8 mb-10">
            <p className="pb-5">
              <MdOutlineCardTravel className="text-[#FF7235] text-[24px]" />
            </p>
            <h2 className="font-semibold md:text-[20px] lg:text-[32px] text-[#292830] pb-5">Sliver Plan</h2>
            <ul>
              <li className="font-normal md:text-[14px] lg:text-[18px] text-[#292830] flex  items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Store unlimited data
              </li>
              <li className="font-normal md:text-[14px] lg:text-[18px] text-[#292830] flex  items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Export to pdf, xls, csv
              </li>
              <li className="font-normal md:text-[14px] lg:text-[18px] text-[#292830] flex items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Cloud server support
              </li>
            </ul>
            <div className="pt-6">
              <p className="font-semibold md:text-[18px] lg:text-[24px]">
                $9.99<span className="lg:text-[20px] md:text-[14px] font-light text-[#BDBDBD]">/year</span>
              </p>
              <span className="font-normal text-[12px] text-[#BDBDBD]">
                up to 3 user + 1.99 per user
              </span>
            </div>

            <div className="button pt-8">
              <button
                className="group-hover:bg-[#FF7235] group-hover:text-[#FFFFFF] text-[#FF7235] border border-[#FF7235 bg-[#FFFFFF] md:py-2 lg:py-3 lg:px-6 md:px-4 rounded-md lg:text-[16px] md:text-[12px]  flex items-center gap-3 p-1"
              >
                Get this <FaLongArrowAltRight />
              </button>
            </div>
          </div>

     {/* >>>>>>>>>>>>>>>>> 3 card >>>>>>>>>>>>>>  */}
          <div className="group transition-all duration-300 hover:shadow-lg card border border-[rgba(0,0,0,0.1)] lg:p-16 md:p-7 p-8 mb-10">
            <p className="pb-5">
              <MdOutlineCardTravel className="text-[#4D12EE] text-[24px]" />
            </p>
            <h2 className="font-semibold md:text-[20px] lg:text-[32px] text-[#292830] pb-5">Starter Plan</h2>
            <ul>
              <li className="font-normal md:text-[14px] lg:text-[18px] text-[#292830] flex  items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Store unlimited data
              </li>
              <li className="font-normal md:text-[14px] lg:text-[18px] text-[#292830] flex  items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Export to pdf, xls, csv
              </li>
              <li className="font-normal md:text-[14px] lg:text-[18px] text-[#292830] flex items-center gap-2 mb-2">
                <FaCheck className="text-[#BDBDBD] " />
                Cloud server support
              </li>
            </ul>
            <div className="pt-6">
              <p className="font-semibold md:text-[18px] lg:text-[24px]">
                $9.99<span className="lg:text-[20px] md:text-[14px] font-light text-[#BDBDBD]">/year</span>
              </p>
              <span className="font-normal text-[12px] text-[#BDBDBD]">
                up to 3 user + 1.99 per user
              </span>
            </div>

            <div className="button pt-8">
              <button
                className="group-hover:bg-[#FF7235] transition-all duration-300 group-hover:text-[#FFFFFF] text-[#FF7235] border border-[#FF7235 bg-[#FFFFFF] md:py-2 lg:py-3 lg:px-6 md:px-4 rounded-md lg:text-[16px] md:text-[12px] flex items-center gap-3 p-1"
              >
                Get this <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
