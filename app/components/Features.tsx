"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdPhonelinkOff } from "react-icons/md";
import { CiCloudOn } from "react-icons/ci";
import { MdOutlineBackpack } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";


const Features: React.FC = () => {
  return (
    <>
      {/* feature 1 >>>>>>>>>>>>>>>>>>>>>>>>  */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2">
            <div className="Info w-full">
              <p className="lg:text-[22px] md:text-[16px] font-normal text-[#BDBDBD] uppercase">
                Alwalys online
              </p>
              <h1 className="lg:text-[96px] md:text-[50px] font-bold text-[#292830] leading-[100%] py-4">
                Real-time support with cloud
              </h1>
              <p className="lg:text-[24px] md:text-[16px] font-normal text-[#BDBDBD] ">
                Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
                accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
                eget ut.
              </p>

              <Link
                href=""
                className="font-normal lg:text-[24px] md:text-[18px] text-[#FF7235] flex items-center lg:gap-4 md:gap-2 py-4"
              >
                Learn more <FaArrowRightLong className="lg:text-[#FF7235] lg:text-[18px] md:text-[12px]" />
              </Link>
            </div>
            <div className="feature-image w-full flex items-center justify-end">
              <Image
                src="/Illustrator.png"
                alt="Feature Illustration"
                width={539}
                height={433}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* feature 2 >>>>>>>>>>>>>>>>>>>>>>>>>  */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2">
            <div className="feature-image w-full  flex items-center">
              <Image
                src="/Illustrator-image.png"
                alt="Feature Illustration"
                width={540}
                height={431}
                className="object-contain"
              />
            </div>
            <div className="Info flex items-center justify-end">
              <div className="Info w-full ">
                <p className="lg:text-[22px] md:text-[16px] font-normal text-[#BDBDBD] uppercase">
                  free some cost
                </p>
                <h1 className="lg:text-[96px] md:text-[50px] font-bold text-[#292830] leading-[100%] py-6">
                  Save cost <br /> for you and family
                </h1>
                <p className="lg:text-[24px] md:text-[16px] font-normal text-[#BDBDBD] ">
                  Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
                  accumsan nisi, tincidunt vel. Enim ipsum, amet quis
                  ullamcorper eget ut.
                </p>

                <Link
                  href=""
                  className="font-normal lg:text-[24px] md:text-[18px] text-[#FF7235] flex items-center lg:gap-4 md:gap-2 py-4"
                >
                  Learn more <FaArrowRightLong className="lg:text-[#FF7235] lg:text-[18px] md:text-[12px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2">
            <div className="Info w-full">
              <p className="lg:text-[22px] md:text-[16px] font-normal text-[#BDBDBD] uppercase">
                Use anytime
              </p>
              <h1 className="lg:text-[96px] md:text-[50px] font-bold text-[#292830] leading-[100%] py-6">
                Use anytime when you need
              </h1>
              <p className="lg:text-[24px] md:text-[16px] font-normal text-[#BDBDBD]">
                Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
                accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
                eget ut.
              </p>

              <Link
                href=""
                className="font-normal lg:text-[24px] md:text-[18px] text-[#FF7235] flex items-center lg:gap-4 md:gap-2 py-4"
              >
               Learn more <FaArrowRightLong className="lg:text-[#FF7235] lg:text-[18px] md:text-[12px]"/>
              </Link>
            </div>
            <div className="feature-image w-full flex items-center justify-end">
              <Image
                src="/delivery.png"
                alt="Feature Illustration"
                width={539}
                height={433}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* feature 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex  items-center">
            <h1 className="lg:text-[96px] md:text-[50px] text-[20px] font-bold text-[#292830] leading-[100%] md:w-[75%] w-[50%]">
              The Product we <br /> work with.
            </h1>
            <p className="lg:text-[24px] md:text-[16px] font-normal line-height: 1 text-[#BDBDBD] w-[50%]">
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.
            </p>
          </div>


          <div className="py-10">
            <div className="md:flex justify-center gap-4 items-center py-20">
              {/* card 1 ......................  */}
              <div className="group transition-all duration-300  card flex justify-center items-center flex-col hover:shadow-lg md:py-20 md:px-0 lg:px-20 ">
                <button className="flex justify-center items-center bg-[#FFBD740D] lg:w-16 md:w-12 lg:h-16 md:h-12 rounded-full">
                  <MdPhonelinkOff  className="text-[#E2598B] lg:text-[35px] md:text-[25px]" />
                </button>
                <h2 className="lg:text-[30px] md:text-[20px] text-[#292830] font-medium py-3 ">
                  Cross platform
                </h2>
                <p className="lg:text-[14px] md:text-[12px] font-normal text-[#BDBDBD] text-center">
                  Elit esse cillum dolore eu fugiat nulla <br /> pariatur
                </p>
                <Link href="" className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaLongArrowAltRight />
                </Link>
              </div>
                  {/* card 2 .......................  */}
              <div className="group transition-all duration-300 card flex justify-center items-center flex-col hover:shadow-lg py-20 md:px-0 lg:px-20 ">
                <button className="flex justify-center items-center bg-[#FFBD740D] lg:w-16 md:w-12 lg:h-16 md:h-12 rounded-full">
                  <CiCloudOn className="text-[#E2598B] lg:text-[35px] md:text-[25px]" />
                </button>
                <h2 className="lg:text-[30px] md:text-[20px] text-[#292830] font-medium py-3">
                  Cloud server
                </h2>
                <p className="lg:text-[14px] md:text-[12px] font-normal text-[#BDBDBD] text-center">
                  Elit esse cillum dolore eu fugiat nulla <br /> pariatur
                </p>
                <Link href="" className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaLongArrowAltRight />
                </Link>
              </div>
                  {/* card 3 ............................  */}
              <div className="group transition-all duration-300 card flex justify-center items-center flex-col p-10 hover:shadow-lg py-20 md:px-0 lg:px-20">
                <button className="flex justify-center items-center bg-[#FFBD740D] lg:w-16 md:w-12 lg:h-16 md:h-12 rounded-full">
                  <MdOutlineBackpack className="text-[#4D12EE] lg:text-[35px] md:text-[25px]" />
                </button>
                <h2 className="lg:text-[30px] md:text-[20px] text-[#292830] font-medium py-3">
                  Pure Javascript
                </h2>
                <p className="lg:text-[14px] md:text-[12px] font-normal text-[#BDBDBD] text-center">
                  Elit esse cillum dolore eu fugiat nulla <br /> pariatur
                </p>

                <Link href="" className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
