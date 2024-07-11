"use client";
import SingleChat from "@/components/chatroom/SingleChat";
import { H3 } from "@/components/typography";
import { getSession } from "@/lib";
import React, { ReactNode } from "react";

export default function page({ children }: { children: ReactNode }) {
  const userdetail = "milan";
  async function milaa() {
    const session = await getSession();
    console.log("session milan", session);
  }
  milaa();
  return (
    <div className=" p-4">
      <p className=" text-white text-xl font-medium">No Chat Selected yet</p>
    </div>
  );
}
