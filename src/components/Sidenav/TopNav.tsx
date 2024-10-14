"use client"
import React from "react"
import { menus } from "../../../constants/sidenavbar"
import Link from "next/link"
import { Home } from "lucide-react"
import { redirect, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { deleteSession } from "@/lib"

export default function TopNav() {
  const pathname = usePathname()

  async function handleLogout() {
    console.log("logout")
    await deleteSession()
  }

  return (
    <div>
      <div className=" justify-between flex flex-row  bg-mybg md:hidden  fixed z-50 left-0 top-0 right-0  w-full  px-2 py-2   items-start">
        <ul className=" w-full  flex  gap-8 sm:gap-10  items-center  text-center text-white text-sm    cursor-pointer">
          {menus.map((m: any, idx: number) => {
            const isActive = pathname === m.to
            return (
              <li
                key={idx}
                className={cn(
                  "flex items-center gap-2 text-center",

                  isActive && " text-myblue font-semibold"
                )}
              >
                {/* <Home/> */}
                <Link
                  className={
                    "flex sm:flex-row flex-col sm:text-sm text-xs items-center gap-2 text-center"
                  }
                  href={m.to}
                >
                  {m.icon} <span>{m.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="">
          <button
            className=" text-white sm:block hidden bg-primary text-xs p-1 rounded-md"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
          <button
            className="   sm:hidden flex items-center justify-center bg-white text-xs p-1 rounded-md"
            onClick={() => handleLogout()}
          >
            <img src="/logout.png" alt="logout" height={30} width={30} />
          </button>
        </div>
      </div>
    </div>
  )
}
