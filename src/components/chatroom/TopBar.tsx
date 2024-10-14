"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useAuth } from "../../../providers/AuthProvider"
import { imageUrlConverter } from "../../../helpers/imageUrl"
import { useSession } from "../../../providers/SessionProvider"
import { io } from "socket.io-client"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function TopBar({ socket }: { socket: any }) {
  const [receiverOnline, setReceiverOnline] = useState(false)
  // const { chatroomFriend: c } = useAuth();
  const {
    friend: c,
    session: { user },
    activeUsers,
  } = useSession()

  //socket connection establish
  // useEffect(() => {
  //   // let socket = io(`${BACKEND_URL}`)
  //   console.log("topbar ko userid", user._id)

  //   socket?.emit("addUser", user._id)

  //   socket?.on("getUsers", (users: any) => {
  //     console.log("active userss TOpBAr bata", users)
  //     const online = users.find((u: any) => u.userId === c._id)
  //     console.log("onl;ine ko xaa:", online)

  //     if (online) {
  //       setReceiverOnline(true)
  //     } else {
  //       setReceiverOnline(false)
  //     }
  //   })
  // }, [socket, user._id])
  let isActive
  isActive = activeUsers.find(
    (user: any) => user.userId.toString() === c._id.toString()
  )

  return (
    <div>
      {" "}
      <div className=" rounded-full flex justify-between items-center px-4 py-2 bg-mylightdark">
        <div className=" flex items-center gap-4">
          <img
            src={imageUrlConverter(c?.pic)}
            alt="user"
            height={40}
            width={40}
            className=" w-10 h-10  object-cover object-top rounded-full"
          />
          <div>
            <h4>{c?.name}</h4>
            <p className=" text-xs text-muted-foreground">Friend</p>
          </div>
        </div>
        <div>
          <div
            className={`rounded-full h-2 w-2 ${isActive ? "bg-green-500" : "bg-gray-400"} `}
          ></div>
        </div>
      </div>
    </div>
  )
}
