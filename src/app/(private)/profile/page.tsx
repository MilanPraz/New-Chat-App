"use client";
import ChangePP from "@/components/profile/ChangePP";
import { H3 } from "@/components/typography";
import Image from "next/image";
import { useAuth } from "../../../../providers/AuthProvider";
import UserCard from "@/components/profile/UserCard";
import { getSession } from "../../../../lib";
import { useEffect } from "react";

export default async function page() {
  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      console.log("session jai clinet'", sessionData);
    }

    fetchSession();
  }, []);

  return (
    <div className=" p-8 text-white space-y-8">
      {/* USER DETAILS SHOW */}
      <UserCard />
      <div>
        <ChangePP />
      </div>
    </div>
  );
}
