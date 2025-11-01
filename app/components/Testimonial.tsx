"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <section className="py-16 card-swiper overflow-hidden">
        <div className="container-fluid mx-auto px-4">
          <h1 className="text-[96px] font-bold text-center leading-[100%]">
            We have millions of <br /> best wishers
          </h1>
          <div className="py-10 pt-20">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              pagination={true}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}

              breakpoints={{
    640: { slidesPerView: 1 },   // sm: 1 slide
    768: { slidesPerView: 2 },   // md: ✅ 1 slide
    1024: { slidesPerView: 3 },  // lg: 3 slides
    1280: { slidesPerView: 4 },  // xl: 4 slides
  }}
              className="mySwiper w-full ml-[-60px] overflow-x-hidden pb-[100px]"
            >
              {/* 1 ...........  */}
              <SwiperSlide className="shadow-md border-t-8 border-[#FF7235] rounded-t-md p-8">
                <p className="text-[18px] font-normal text-[#000000]">
                  Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                  volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                  pretium felis massa mauris, aliquam congue.
                </p>
                <div className="flex items-center gap-3 pt-6">
                  <Image
                    src="/women.png"
                    alt="Profile image"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />

                  <p className="font-bold text-[16px]">
                    Cameron Williamson{" "}
                    <span className="font-normal text-[16px]">, </span>
                    <span className="font-normal text-[16px] text-gray-400">
                      CEO
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              {/* 2.................  */}
              <SwiperSlide className="shadow-md border-t-8 border-[#FFBE21] rounded-t-md p-8">
                <p className="text-[18px] font-normal text-[#000000]">
                  Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                  volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                  pretium felis massa mauris, aliquam congue.
                </p>
                <div className="flex items-center gap-3 pt-6">
                  <Image
                    src="/japanese.png"
                    alt="Profile image"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />

                  <p className="font-bold text-[16px]">
                    Cameron Williamson{" "}
                    <span className="font-normal text-[16px]">, </span>
                    <span className="font-normal text-[16px] text-gray-400">
                      CEO
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              {/* 3 ......................  */}
              <SwiperSlide className="shadow-md border-t-8 border-[#4756DF] rounded-t-md p-8">
                <p className="text-[18px] font-normal text-[#000000]">
                  Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                  volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                  pretium felis massa mauris, aliquam congue.
                </p>
                <div className="flex items-center gap-3 pt-6">
                  <Image
                    src="/chinese.png"
                    alt="Profile image"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />

                  <p className="font-bold text-[16px]">
                    Cameron Williamson{" "}
                    <span className="font-normal text-[16px]">, </span>
                    <span className="font-normal text-[16px] text-gray-400">
                      CEO
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              {/* 4 ....................  */}
              <SwiperSlide className="shadow-md border-t-8 border-[#3EC1F3] rounded-t-md p-8">
                <p className="text-[18px] font-normal text-[#000000]">
                  Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                  volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                  pretium felis massa mauris, aliquam congue.
                </p>
                <div className="flex items-center gap-3 pt-6">
                  <Image
                    src="/women.png"
                    alt="Profile image"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />

                  <p className="font-bold text-[16px]">
                    Cameron Williamson{" "}
                    <span className="font-normal text-[16px]">, </span>
                    <span className="font-normal text-[16px] text-gray-400">
                      CEO
                    </span>
                  </p>
                </div>
              </SwiperSlide>

              {/* 5 .....................  */}
              <SwiperSlide className="shadow-md border-t-8 border-[#BB7259] rounded-t-md p-8">
                <p className="text-[18px] font-normal text-[#000000]">
                  Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                  volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                  pretium felis massa mauris, aliquam congue.
                </p>
                <div className="flex items-center gap-3 pt-6">
                  <Image
                    src="/korean.png"
                    alt="Profile image"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />

                  <p className="font-bold text-[16px]">
                    Cameron Williamson{" "}
                    <span className="font-normal text-[16px]">, </span>
                    <span className="font-normal text-[16px] text-gray-400">
                      CEO
                    </span>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="shadow-md border-t-8 border-[#BB7259] rounded-t-md p-8">
                <p className="text-[18px] font-normal text-[#000000]">
                  Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                  volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                  pretium felis massa mauris, aliquam congue.
                </p>
                <div className="flex items-center gap-3 pt-6">
                  <Image
                    src="/women.png"
                    alt="Profile image"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />

                  <p className="font-bold text-[16px]">
                    Cameronyuytu Williamson{" "}
                    <span className="font-normal text-[16px]">, </span>
                    <span className="font-normal text-[16px] text-gray-400">
                      CEO
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-fluid mx-auto">
          <div className="countries bg-[#FF7235] h-[700px] relative">
            <h1 className="text-[72px] font-bold text-center text-[#FFFFFF] pt-20 leading-[100%]">
              20M+ downloaded from 32 <br /> diffrent countires
            </h1>
            <p className="text-[36px] font-medium text-center text-[#FFFFFF] pt-4">
              Try demo for 7 days with full features.
            </p>
            <div className="flex justify-center pt-12 z-10 relative">
              <select className="bg-[#ffffff] text-[#FF7235] py-[18px] outline-0 pl-6 pr-10 text-[24px] font-normal rounded-lg w-[270px] appearance-none drop-icon1">
                <option value="">Demo 1</option>
                <option value="">Demo 2</option>
                <option value="">Demo 3</option>
              </select>
            </div>

            <div className="flex justify-center">
              {" "}
              <Image
                src="/gift.png"
                width={1295}
                height={340}
                alt="Gift"
                className="absolute bottom-20 w-[80%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
