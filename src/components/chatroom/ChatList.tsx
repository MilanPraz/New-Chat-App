"use client"
import React, { useEffect, useRef, useState } from "react"
import SingleChat from "./SingleChat"
import { useGetChat } from "../../../hooks/query/chat.query"
import { useAuth } from "../../../providers/AuthProvider"
import { useParams } from "next/navigation"
import { Input } from "../ui/input"
import { Send } from "lucide-react"
import { usePostAChat } from "../../../hooks/mutations/chat"
import toast from "react-hot-toast"
import { useSession } from "../../../providers/SessionProvider"
import { io } from "socket.io-client"

// let socket
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function ChatList({ socket }: { socket: any }) {
  const paramsId = useParams()
  const [msg, setMsg] = useState("")
  const [chats, setChats] = useState<any[]>([]) // Local state to store chats in real-time

  const {
    chatRoomId,
    session: { user },
    friend,
  } = useSession()
  // const { user, chatroomFriend } = useAuth();
  // console.log("chatroom vitra hai frind", friend)
  const params = {
    senderId: user?._id,
    receiverId: paramsId?.id,
  }

  const { mutateAsync } = usePostAChat()
  const {
    data: AllChats,
    isLoading,
    isSuccess,
  } = useGetChat({
    id: chatRoomId || "new",
    params,
  })

  useEffect(() => {
    if (!socket) {
      // console.log("Socket is not initialized!")
      return
    }
    // socket?.emit("addUser", user._id)
    socket?.on("getMessage", (data: any) => {
      // console.log("get mesgagagegaegaegeaggeaaeeaea")
      // console.log("socket ko getMEssage haiii", data)
      setChats((prev: any) => [
        ...prev,
        { user: data.userDetail, message: data.message },
      ])
    })
    return () => {
      socket.off("getMessage")
    }
  }, [user._id])

  useEffect(() => {
    if (chats.length > 0) {
      // console.log("Scroll testing after chats update")
      scrollToBottom()
    }
  }, [chats])
  const scrollRef = useRef<HTMLDivElement>(null)
  // Scroll to bottom function
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }
  useEffect(() => {
    if (isSuccess) {
      setChats(AllChats)
      scrollToBottom()
    }
  }, [isSuccess, AllChats, socket])

  // console.log("chatRoomId xa?", chatRoomId)

  // console.log("chat haiiiii", AllChats)

  async function handleSubmit(e: any) {
    e.preventDefault()
    const payload = {
      message: msg,
      senderId: user?._id,
      receiverId: friend?._id,
      chatId: chatRoomId || "new",
    }

    //for the socket
    // let socket = io(`${BACKEND_URL}`)

    socket?.emit("sendMessage", {
      message: msg,
      senderId: user?._id,
      receiverId: friend?._id,
      chatId: chatRoomId || "new",
    })

    // console.log("payload", payload)
    const promise = mutateAsync(payload).then(() => {
      setMsg("")
    })

    // toast.promise(promise, {
    //   loading: "Sending msg...",
    //   success: "Successfully sent",
    //   error: (eerr) => "Something went wrong",
    // })
  }

  // console.log("chat after sendingggggg", chats)

  if (isLoading) return <p className=" text-white">Chat loading....</p>
  return (
    <div className="  ">
      <div
        ref={scrollRef}
        className="chatScroll w-full  pb-2  flex flex-col gap-4 overflow-auto pr-4 h-[60vh] md:h-[70vh]"
      >
        {chats?.map((c: any, idx: number) => {
          return <SingleChat user={user} key={idx} chat={c} />
        })}
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" flex items-center border-2  rounded-lg p-2"
      >
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className=" bg-transparent w-full text-sm flex-1 outline-none"
          placeholder="your message"
        />
        <button type="submit">
          <Send size={16} />
        </button>
      </form>
    </div>
  )
}
