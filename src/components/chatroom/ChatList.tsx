"use client";
import React, { useState } from "react";
import SingleChat from "./SingleChat";
import { useGetChat } from "../../../hooks/query/chat.query";
import { useAuth } from "../../../providers/AuthProvider";
import { useParams } from "next/navigation";
import { Input } from "../ui/input";
import { Send } from "lucide-react";
import { usePostAChat } from "../../../hooks/mutations/chat";
import toast from "react-hot-toast";
import { useSession } from "../../../providers/SessionProvider";

export default function ChatList() {
  const paramsId = useParams();
  const [msg, setMsg] = useState("");
  const {
    chatRoomId,
    session: { user },
    friend,
  } = useSession();
  // const { user, chatroomFriend } = useAuth();
  console.log("chatroom vitra hai frind", friend);
  const params = {
    senderId: user?._id,
    receiverId: paramsId?.id,
  };

  console.log("chatRoomId xa?", chatRoomId);
  const { mutateAsync } = usePostAChat();
  const { data: AllChats, isLoading } = useGetChat({
    id: chatRoomId || "new",
    params,
  });
  console.log("chat haiiiii", AllChats);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("form cliikc");
    const payload = {
      message: msg,
      senderId: user?._id,
      receiverId: friend?._id,
      chatId: chatRoomId || "new",
    };

    console.log("payload", payload);
    const promise = mutateAsync(payload).then(() => {
      console.log("Successfullly msg sent");
      setMsg("");
    });

    toast.promise(promise, {
      loading: "Sending msg...",
      success: "Successfully sent",
      error: (eerr) => "Something went wrong",
    });
  }

  if (isLoading) return <p className=" text-white">Chat loading....</p>;
  return (
    <div className="  ">
      <div className=" w-full   flex flex-col gap-4 h-[75vh]">
        {AllChats?.map((c: any, idx: number) => {
          return <SingleChat user={user} key={idx} chat={c} />;
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
  );
}