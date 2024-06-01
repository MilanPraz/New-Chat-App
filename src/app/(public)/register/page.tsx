"use client";
import { H4 } from "@/components/typography";

import Image from "next/image";
import React from "react";
import { TLoginSchema, loginSchema } from "../../../../schema/auth.schema";
import dynamic from "next/dynamic";
// import Register from "@/components/auth/Register";

const Register = dynamic(() => import("@/components/auth/Register"), {
  ssr: false,
});

const page = () => {
  return (
    <section className=" relative bg-gradient-to-b from-sky-300 to-fuchsia-300 h-[100vh] w-full">
      <div className="absolute z-40   max-w-[90%] sm:max-w-md w-full space-y-10  p-8 bg-gray-50  bg-opacity-30 rounded-xl drop-shadow-lg  backdrop-blur-md  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <div>
          <H4>New Here? Signup Now</H4>
        </div>
        <div>
          <Register />
        </div>
      </div>

      <div className="  hidden md:block absolute top-[50%] left-[50%] z-0">
        <Image
          src="/register/cloud.png"
          alt="cloud"
          height={100}
          width={100}
          className=" w-40 h-40"
        />
      </div>
      <div className="  hidden md:block absolute top-20 left-[50%]">
        <Image
          src="/register/cloud.png"
          alt="cloud"
          height={100}
          width={100}
          className=" w-40 h-40"
        />
      </div>
      <div className=" absolute top-32 z-50 left-[80%] xl:left-[60%]">
        <Image
          src="/register/cloud.png"
          alt="cloud"
          height={100}
          width={100}
          className=" w-20 h-20 sm:w-40 sm:h-40"
        />
      </div>
      <div className="  absolute top-20 left-[20%]">
        <Image
          src="/register/cloud.png"
          alt="cloud"
          height={100}
          width={100}
          className=" w-40 h-40"
        />
      </div>
      <div className=" hidden md:block absolute top-[40%] left-[26%]">
        <Image
          src="/register/cloud.png"
          alt="cloud"
          height={100}
          width={100}
          className=" w-40 h-40"
        />
      </div>
      <div className=" hidden md:block absolute top-40 left-10">
        <Image
          src="/register/cloud.png"
          alt="cloud"
          height={100}
          width={100}
          className=" w-40 h-40"
        />
      </div>
      <div className=" absolute top-[60%] right-[16%]">
        <Image
          src="/register/cloud.png"
          alt="cloud"
          height={100}
          width={100}
          className=" w-40 h-40"
        />
      </div>
      <div className=" hidden md:block absolute top-[10%] right-10">
        <Image
          src="/register/cloud.png"
          alt="cloud"
          height={100}
          width={100}
          className=" w-40 h-40"
        />
      </div>
    </section>
  );
};

export default page;
