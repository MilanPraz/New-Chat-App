import MessagesList from "@/components/Home/MessagesList";
import SingleMessageOfFriends from "@/components/Home/SingleMessageOfFriends";
import ChatList from "@/components/chatroom/ChatList";
import { H3 } from "@/components/typography";
import React from "react";

export default function page() {
  return (
    <div className=" ">
      <div className=" mb-4 text-white">
        <H3>Your Messages</H3>
      </div>
      <div>
        <MessagesList />
      </div>
    </div>
  );
}
