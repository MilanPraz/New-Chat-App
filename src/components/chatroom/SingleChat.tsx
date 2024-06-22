import { cn } from "@/lib/utils";
import React from "react";

export default function SingleChat({ chat }: { chat: any }) {
  return (
    <div
      className={cn(
        "max-w-[50%] bg-primary text-white ml-auto p-0 text-xs rounded-2xl"
      )}
    >
      <p className="p-3">{chat.message}</p>
    </div>
  );
}
