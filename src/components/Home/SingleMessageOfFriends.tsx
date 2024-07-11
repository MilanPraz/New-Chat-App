import Image from "next/image";
import React from "react";
import { imageUrlConverter } from "../../../helpers/imageUrl";

export default function SingleMessageOfFriends({ user }: { user: any }) {
  const { name, pic } = user;
  return (
    <div className=" rounded-lg flex cursor-pointer items-center overflow-auto gap-2 bg-mybg hover:bg-mylightdark p-2 w-fit pr-20">
      <div>
        <Image
          src={imageUrlConverter(pic)}
          height={40}
          width={40}
          alt="pp"
          className=" w-10 h-10 object-cover object-top  rounded-full"
        />
      </div>
      <div>
        <h5 className=" text-white">{name}</h5>
        <p className=" text-muted-foreground text-xs ">Hi how are you?</p>
      </div>
    </div>
  );
}
