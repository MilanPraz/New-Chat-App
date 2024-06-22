"use client";
import React from "react";
import SingleUser from "./SingleUser";
import { H3 } from "../typography";
import { useAuth } from "../../../providers/AuthProvider";
import { useGetAllPeople } from "../../../hooks/query/people";
import { useGetChat } from "../../../hooks/query/chat.query";
import Link from "next/link";

export default function PeopleList() {
  const { token, setChatroomFriend } = useAuth();
  const { data: AllPeople, isLoading } = useGetAllPeople(token);
  console.log("sabaiiiiiiii people", AllPeople);
  //   const { data } = useGetChat();
  //

  function handleSetFriendDetail(friend: any) {
    console.log("friend detail", friend);
    setChatroomFriend(friend);
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
