"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import { imageUrlConverter } from "../../../helpers/imageUrl"
import { useSession } from "../../../providers/SessionProvider"
import { useGetChat } from "../../../hooks/query/chat.query"
import PageLoadingUI from "../PageLoadingUI"

export default function SingleMessageOfFriends({
  user,
  activeUsers,
}: {
  user: any
  activeUsers: any
}) {
  const {
    chatRoomId,
    session: { user: sender },
    friend,
  } = useSession()
  const params = {
    senderId: sender?._id,
    receiverId: user?.id, //this user is receiver
  }
  const {
    data: AllChats,
    isLoading,
    isSuccess,
  } = useGetChat({
    id: chatRoomId,
    params,
  })

  // console.log("all chats aouxa tw???????????????", AllChats)

  let isActive
  const { name, pic, _id: id } = user
  const {
    socket,
    session: { user: u },
  } = useSession()

  //connecting to socket io sever
  // console.log("active users haiii singleMessage ma::::::", activeUsers)

  // console.log("Active loggededin ko id", id)
  isActive = activeUsers.find(
    (user: any) => user.userId.toString() === id.toString()
  )

  // console.log("YO manche active xa?", isActive)
  // useEffect(() => {
  //   console.log("singleeeeeeeeeeeeeeeee")

  //   socket?.emit("addUser", u._id)
  //   console.log("iiiiiiiiiiiiiiii")
  // }, [socket, u._id])

  if (isLoading) {
    return <PageLoadingUI />
  }
  return (
    <div className=" rounded-lg flex cursor-pointer items-center overflow-auto gap-2 bg-mybg hover:bg-mylightdark p-2 w-fit border-2  border-gray-600">
      <div>
        <img
          src={imageUrlConverter(pic)}
          height={40}
          width={40}
          alt="pp"
          className=" w-10 h-10 object-cover object-top  rounded-full"
        />
      </div>
      <div>
        <h5 className=" text-white">{name}</h5>
        <p className=" text-muted-foreground text-xs ">
          {AllChats[AllChats?.length - 1]?.message}
        </p>
      </div>
      <div className=" ml-4">
        <div
          className={` h-2 w-2 ${isActive === undefined ? "bg-gray-400" : "bg-green-500"}  rounded-full`}
        ></div>
      </div>
    </div>
  )
}
