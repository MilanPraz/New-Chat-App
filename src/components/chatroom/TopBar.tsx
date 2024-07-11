"use client";
import Image from "next/image";
import React from "react";
import { useAuth } from "../../../providers/AuthProvider";
import { imageUrlConverter } from "../../../helpers/imageUrl";
import { useSession } from "../../../providers/SessionProvider";

export default function TopBar() {
  // const { chatroomFriend: c } = useAuth();
  const { friend: c } = useSession();
  console.log("chattttttttttt", c);
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
          <div className=" rounded-full h-2 w-2 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}
