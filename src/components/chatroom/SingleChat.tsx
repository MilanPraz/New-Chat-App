import { cn } from "@/lib/utils";
import React from "react";

export default function SingleChat({ chat, user }: { chat: any; user: any }) {
  // console.log("user hai single chat", user);
  // console.log("friend hai single chat", chat);
  return (
    <div
      className={cn(
        "max-w-[50%]  text-white p-0 text-xs rounded-2xl",
        user._id === chat.user._id
          ? "ml-auto bg-primary"
          : "mr-auto bg-orange-700"
      )}
    >
      <p className="p-3">{chat.message}</p>
    </div>
  );
}
