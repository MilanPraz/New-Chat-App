"use client";
import ChatList from "@/components/chatroom/ChatList";
import SingleChat from "@/components/chatroom/SingleChat";
import TopBar from "@/components/chatroom/TopBar";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  return (
    <div className=" p-4 max-w-3xl text-white">
      <TopBar />
      <div>
        <div className=" p-4">
          <ChatList />
        </div>
      </div>
    </div>
  );
}
