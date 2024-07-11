import SideNav from "@/components/Sidenav/SideNav";
import React from "react";
import { SessionProvider } from "../../../providers/SessionProvider";
import { getSession } from "@/lib";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  // console.log("Session xxxxxxa", session);
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}
