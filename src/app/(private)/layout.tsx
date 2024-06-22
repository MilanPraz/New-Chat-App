import SideNav from "@/components/Sidenav/SideNav";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ background: "url(/background.jpg) no-repeat center/cover" }}
      className=" overflow-auto h-screen "
    >
      <div className=" inset-0 absolute bg-black/80 h-[100vh]"></div>
      <div className="flex  md:gap-4  2xl:container">
        <SideNav />
        <div className=" flex-1 w-full md: py-4 relative h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
