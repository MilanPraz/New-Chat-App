"use client";
import SingleChat from "@/components/chatroom/SingleChat";
import { H3 } from "@/components/typography";
import React, { ReactNode } from "react";

export default function page({ children }: { children: ReactNode }) {
  const userdetail = "milan";
  return (
    <div className=" p-4">
      <p className=" text-white text-xl font-medium">No Chat Selected yet</p>
    </div>
  );
}
