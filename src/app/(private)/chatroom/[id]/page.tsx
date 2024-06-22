"use client";
import ChatList from "@/components/chatroom/ChatList";
import SingleChat from "@/components/chatroom/SingleChat";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  return (
    <div className=" p-4">
      <ChatList />
    </div>
  );
}
