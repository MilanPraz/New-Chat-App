import SideNav from "@/components/Sidenav/SideNav"
import React from "react"
import { getSession } from "@/lib"
import dynamic from "next/dynamic"
import TopNav from "@/components/Sidenav/TopNav"

const SessionProvider = dynamic(
  () =>
    import("../../../providers/SessionProvider").then(
      (module) => module.SessionProvider
    ),
  { ssr: false }
)
export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()
  // console.log("Session xxxxxxa", session);
  return (
    <SessionProvider session={session}>
      <div
        style={{ background: "url(/background.jpg) no-repeat center/cover" }}
        className=" overflow-auto h-screen "
      >
        <div className=" inset-0 absolute bg-black/80 h-[100vh]"></div>
        <div className="flex flex-col md:flex-row  md:gap-4  2xl:container">
          <SideNav />
          <TopNav />
          <div className=" flex-1 md:mt-0 mt-12 w-full md: py-4 relative h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </SessionProvider>
  )
}
