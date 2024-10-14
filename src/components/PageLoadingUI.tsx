import React from "react"

export default function PageLoadingUI() {
  return (
    <div className=" h-screen w-screen overflow-hidden flex justify-center ">
      <div className=" relative h-14 w-14  rounded-full animate-spin  top-[30%]">
        <div className=" absolute left-0 h-10 w-10 bg-primary animate-spin rounded-full " />
        <div className=" absolute left-4 h-8 w-8 bg-fuchsia-500 animate-spin delay-200 rounded-full " />
        <div className="absolute left-6 h-6 w-6 bg-purple-600 animate-spin delay-500  rounded-full" />
        <div className="absolute left-8 h-4 w-4 bg-pink-500 animate-spin delay-500 rounded-full " />
        <div className="absolute left-10 h-2 w-2 bg-red-500 animate-spin delay-500  rounded-full" />
      </div>
    </div>
  )
}
