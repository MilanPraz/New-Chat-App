"use client";
import React from "react";
import { menus } from "../../../constants/sidenavbar";
import Link from "next/link";
import { Home } from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { deleteSession } from "@/lib";

export default function SideNav() {
  const pathname = usePathname();

  async function handleLogout() {
    console.log("logout");
    await deleteSession();
  }

  return (
    <div>
      <div className="  h-[100vh] justify-between bg-mybg sticky left-0 top-0 hidden w-[200px] px-2 py-4 md:flex flex-col items-start">
        <ul className=" w-full     text-center text-white text-sm  space-y-8 mt-8 cursor-pointer">
          {menus.map((m: any, idx: number) => {
            const isActive = pathname === m.to;
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
                  className={"flex items-center gap-2 text-center"}
                  href={m.to}
                >
                  {m.icon} {m.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className=" mb-10">
          <Button onClick={() => handleLogout()}>Logout</Button>
        </div>
      </div>
    </div>
  );
}
