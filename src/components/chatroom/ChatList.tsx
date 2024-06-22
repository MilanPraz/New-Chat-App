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

export default function ChatList() {
  const paramsId = useParams();
  const [msg, setMsg] = useState("");
  const { chatroomId } = useAuth();

  const { user, chatroomFriend } = useAuth();
  console.log("chatroom vitra hai frind", chatroomFriend);
  const params = {
    senderId: user?._id,
    receiverId: paramsId?.id,
  };

  console.log("chatroomid xa?", chatroomId);
  const { mutateAsync } = usePostAChat();
  const { data: AllChats, isLoading } = useGetChat({
    id: chatroomId || "new",
    params,
  });
  console.log("chat haiiiii", AllChats);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("form cliikc");
    const payload = {
      message: msg,
      senderId: user?._id,
      receiverId: chatroomFriend?._id,
      chatId: chatroomId || "new",
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
      <div className=" w-full space-y-3 h-[75vh]">
        {AllChats?.map((c, idx) => {
          return <SingleChat key={idx} chat={c} />;
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
