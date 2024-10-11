"use client"
import ChatList from "@/components/chatroom/ChatList"
import SingleChat from "@/components/chatroom/SingleChat"
import TopBar from "@/components/chatroom/TopBar"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { useSession } from "../../../../../providers/SessionProvider"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function page() {
  const {
    socket,
    session: { user },
  } = useSession()
  useEffect(() => {
    socket?.emit("addUser", user._id)
  }, [socket, user._id])
  return (
    <div className=" p-2 max-w-3xl text-white">
      <TopBar socket={socket} />
      <div>
        <div className=" px-4 py-2">
          <ChatList socket={socket} />
        </div>
      </div>
    </div>
  )
}
