"use client";
import ChangePP from "@/components/profile/ChangePP";
import UserCard from "@/components/profile/UserCard";

export default function page() {
  // useEffect(() => {
  //   async function fetchSession() {
  //     const sessionData = await getSession();
  //     console.log("session jai clinet'", sessionData);
  //   }

  //   fetchSession();
  // }, []);

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
