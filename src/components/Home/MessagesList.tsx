"use client";
import React, { useEffect } from "react";
import SingleMessageOfFriends from "./SingleMessageOfFriends";
import { useAuth } from "../../../providers/AuthProvider";
import { useGetAllFriendsMessage } from "../../../hooks/query/friendsMessages.query";
import Link from "next/link";
import { useSession } from "../../../providers/SessionProvider";

export default function MessagesList() {
  // const { user, setChatroomFriend, SetChatroomId } = useAuth();
  const {
    session: { token, user },
    setFriend,
    setChatRoomId,
  } = useSession();
  //   if(user){}
  const { data, isLoading, refetch } = useGetAllFriendsMessage(user._id);
  console.log("friends msg...", data);

  function handleSetFriendDetail(user: any) {
    console.log("friend detail", user.user);
    console.log("chatidroom detail", user.chatId);
    setFriend(user.user);
    setChatRoomId(user.chatId);
  }

  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user]);
  //   chat id yeta xa hai
  if (isLoading) return <p className=" text-white">Loading...</p>;
  // if (!user) return <p className=" text-white">Loading...</p>;
  return (
    <div>
      <div className=" flex flex-col gap-4">
        {data ? (
          data?.map((user: any, idx: any) => {
            return (
              <Link
                onClick={() => handleSetFriendDetail(user)}
                key={idx}
                href={`/chatroom/${user.user._id}`}
              >
                <SingleMessageOfFriends key={idx} user={user.user} />
              </Link>
            );
          })
        ) : (
          <p className=" text-white text-xl">No data here!</p>
        )}
      </div>
    </div>
  );
}
