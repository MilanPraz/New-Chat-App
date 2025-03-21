import Login from "@/components/auth/Login"
import { H4 } from "@/components/typography"

import Image from "next/image"
import React from "react"

export default function page() {
  return (
    <section className=" relative bg-gradient-to-b from-sky-300 to-fuchsia-300 h-[100vh] w-full">
      <div className=" bg-primary text-white py-4">
        <h2 className=" text-center animate-pulse text-lg">
          The backend server (Render) takes 50 seconds to activate, so please be
          patient.
        </h2>
      </div>
      <div className="absolute z-40   max-w-[90%] sm:max-w-md w-full space-y-10  p-8 bg-gray-50  bg-opacity-30 rounded-xl drop-shadow-lg  backdrop-blur-md  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <div className=" text-center ">
          <H4>Welcome Back! Login Here</H4>
        </div>
        <Login />
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
  )
}
