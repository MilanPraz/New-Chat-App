"use client";
import React from "react";
import SingleUser from "./SingleUser";
import { H3 } from "../typography";
import { useAuth } from "../../../providers/AuthProvider";
import { useGetAllPeople } from "../../../hooks/query/people";
import { useGetChat } from "../../../hooks/query/chat.query";
import Link from "next/link";
import { useSession } from "../../../providers/SessionProvider";

export default function PeopleList() {
  const { data: AllPeople, isLoading } = useGetAllPeople();
  console.log("sabaiiiiiiii people", AllPeople);

  function handleSetFriendDetail(friend: any) {
    console.log("friend detail", friend);
    // setChatroomFriend(friend);
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className=" space-y-4">
      <div>
        <H3>People you may know</H3>
      </div>
      <div className=" space-y-4 ">
        {AllPeople?.map((user: any, idx: number) => {
          return (
            <div key={idx}>
              <div onClick={() => handleSetFriendDetail(user)}>
                <SingleUser user={user} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
