"use client"
import React, { useEffect, useState } from "react"
import SingleMessageOfFriends from "./SingleMessageOfFriends"
import { useAuth } from "../../../providers/AuthProvider"
import { useGetAllFriendsMessage } from "../../../hooks/query/friendsMessages.query"
import Link from "next/link"
import { useSession } from "../../../providers/SessionProvider"
import { io } from "socket.io-client"

// let socket
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function MessagesList() {
  // const { user, setChatroomFriend, SetChatroomId } = useAuth();
  // const [activeUsers, setActiveUsers] = useState([])

  const {
    session: { token, user },
    setFriend,
    setChatRoomId,
    socket,
    setActiveUsers,
    activeUsers,
  } = useSession()
  //   if(user){}
  const { data, isLoading, refetch } = useGetAllFriendsMessage(user?._id)

  useEffect(() => {
    if (!socket) {
      // console.log("Socket is not initialized!")
      return
    }

    // console.log("soccket coonection")

    //add this user to the backend ko user array ma
    socket.emit("addUser", user._id)
    // console.log("varkhar add gare ko use hai:", user._id)

    //list of all active usersd;
    socket.on("getUsers", (users: any) => {
      // console.log("onlin euser ko ko xaaa messagelist maaaaa:", users)
      setActiveUsers(users)
    })

    return () => {
      socket.off("getUsers") // Clean up listener on unmount
    }
  }, [socket, user._id, activeUsers])

  // console.log("acive users session providers:", activeUsers)

  // console.log("dataaa arararararary:", data)

  function handleSetFriendDetail(user: any) {
    // console.log("friend detail", user.user)
    // console.log("chatidroom detail", user.chatId)
    setFriend(user.user)
    setChatRoomId(user.chatId)
  }

  useEffect(() => {
    if (user) {
      refetch()
    }
  }, [user])
  //   chat id yeta xa hai
  if (isLoading) return <p className=" text-white">Loading...</p>
  // if (!user) return <p className=" text-white">Loading...</p>;
  return (
    <div>
      <div className=" flex flex-col gap-4">
        {data ? (
          data?.map((user: any, idx: any) => {
            return (
              <Link
                onClick={() => handleSetFriendDetail(user)}
                key={idx}
                href={`/chatroom/${user.user._id}`}
                className=" w-fit"
              >
                <SingleMessageOfFriends
                  activeUsers={activeUsers}
                  key={idx}
                  user={user.user}
                />
              </Link>
            )
          })
        ) : (
          <p className=" text-white text-xl">No data here!</p>
        )}
      </div>
    </div>
  )
}
