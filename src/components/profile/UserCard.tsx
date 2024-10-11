"use client"
import React from "react"
import { H3 } from "../typography"
import Image from "next/image"
import { imageUrlConverter } from "../../../helpers/imageUrl"
import { useSession } from "../../../providers/SessionProvider"

export default function UserCard() {
  const {
    session: { user },
  } = useSession()
  console.log("User card ko ", user)
  console.log("User card ko image ", user?.pic)
  console.log("image haiiiiiiiiii", imageUrlConverter(user?.pic))

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
          loading="lazy"
        />
        <H3>{user?.name}</H3>
        <p className=" text-xs text-muted">{user?.email}</p>
      </div>
    </div>
  )
}
