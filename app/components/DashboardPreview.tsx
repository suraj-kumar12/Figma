"use client";
import Image from "next/image";
import React from "react";

const DashboardPreview: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="px-0 bg-[#FF7235] relative">
        <div className="dashboard-image">
          <Image
            src="/Blob.png"
            alt="Feature Illustration"
            width={1440}
            height={712}
            className="object-contain w-full"
          />
        </div>
        <div className="dashboard-image1 absolute bottom-0  w-full mx-auto">
          <Image
            src="/dashboard.png"
            alt="Feature Illustration"
            width={1440}
            height={712}
            className="object-contain w-[80%] mx-auto"
          />
        </div>
      </div>

      <div className=" flex justify-between items-center md:gap-4 gap-4 flex-wrap  md:w-[80%] mx-auto md:py-20 py-10 px-2">
        <Image
          src="/facebook.png"
          alt="Feature Illustration"
          width={130}
          height={34}
          className="object-contain"
        />
        <Image
          src="/google.png"
          alt="Feature Illustration"
          width={100}
          height={40}
          className="object-contain "
        />
        <Image
          src="/coca-cola.png"
          alt="Feature Illustration"
          width={100}
          height={30}
          className="object-contain"
        />

        <Image
          src="/linkedIN.png"
          alt="Feature Illustration"
          width={130}
          height={34}
          className="object-contain"
        />
        <Image
          src="/samsung.png"
          alt="Feature Illustration"
          width={130}
          height={34}
          className="object-contain"
        />
      </div>
      
    </section>
  );
};

export default DashboardPreview;
