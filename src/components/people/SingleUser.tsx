"use client"
import Image from "next/image"
import React from "react"
import { H4, H5 } from "../typography"
import { imageUrlConverter } from "../../../helpers/imageUrl"
import { Plus } from "lucide-react"
import toast from "react-hot-toast"
import { usePostAChat } from "../../../hooks/mutations/chat"
import { useAuth } from "../../../providers/AuthProvider"
import { useSession } from "../../../providers/SessionProvider"

export default function SingleUser({ user }: { user: any }) {
  const { name, email, pic } = user
  const { mutateAsync } = usePostAChat()
  const {
    session: { user: UserDetail },
  } = useSession()

  function handleAddFriend() {
    const payload = {
      message: "Hi",
      senderId: UserDetail?._id,
      receiverId: user?._id,
      chatId: "new",
    }

    const promise = mutateAsync(payload)
      .then(() => {
        // console.log("Successfullly msg sent")
        //  setMsg("");
      })
      .catch((err) => console.log(err))

    toast.promise(promise, {
      loading: "Sending Friend Request",
      success: "Friend Request has been sent. ",
      error: (err) => err.msg || "Something went wrong",
    })
    // toast.success("Added Sucessfully");
  }
  return (
    <div className="  rounded-lg flex  justify-between cursor-pointer items-center overflow-auto gap-2 bg-mybg hover:bg-mylightdark p-2   w-[250px]">
      <div className=" flex items-center gap-3">
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
          <p className=" text-muted-foreground text-xs ">{email}</p>
        </div>
      </div>
      <button
        onClick={() => handleAddFriend()}
        className=" rounded-full bg-white p-1 cursor-pointer  text-mydark"
      >
        <Plus size={20} />
      </button>
    </div>
  )
}
