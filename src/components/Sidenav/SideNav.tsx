"use client";
import React from "react";
import { menus } from "../../../constants/sidenavbar";
import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div>
      <div className=" h-screen bg-mybg sticky left-0 top-0 hidden w-[200px] px-2 pt-4 md:flex flex-col items-start">
        <ul className=" w-full   pl-4  text-center text-white text-xs  space-y-8 mt-8 cursor-pointer">
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
      </div>
    </div>
  );
}
