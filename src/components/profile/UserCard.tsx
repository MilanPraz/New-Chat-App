"use client";
import React from "react";
import { H3 } from "../typography";
import Image from "next/image";
import { useAuth } from "../../../providers/AuthProvider";
import { imageUrlConverter } from "../../../helpers/imageUrl";

export default function UserCard() {
  const { user } = useAuth();
  console.log("User card ko ", user);

  return (
    <div>
      <H3>Account Details</H3>
      <div>
        <Image
          src={imageUrlConverter(user?.pic)}
          height={100}
          alt="user"
          className=" h-40 w-40 rounded-full object-cover object-center"
          width={100}
        />
        <H3>{user?.name}</H3>
        <p className=" text-xs text-muted">{user?.email}</p>
      </div>
    </div>
  );
}
