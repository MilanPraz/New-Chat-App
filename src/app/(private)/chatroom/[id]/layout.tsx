import TopBar from "@/components/chatroom/TopBar";
import Image from "next/image";
import React from "react";

type Params = {
  id: string;
};
export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  console.log("id hai", params.id);

  return (
    <div className=" p-4 max-w-3xl text-white">
      <TopBar />
      <div>{children}</div>
    </div>
  );
}
