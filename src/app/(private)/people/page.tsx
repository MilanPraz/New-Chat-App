"use client"
import SingleUser from "@/components/people/SingleUser"
import { H3 } from "@/components/typography"
import React from "react"
import { useGetAllPeople } from "../../../../hooks/query/people"
import PeopleList from "@/components/people/PeopleList"

const page = () => {
  return (
    <div className=" px-2 md:p-6  text-white space-y-4  overflow-auto ">
      <PeopleList />
    </div>
  )
}

export default page
