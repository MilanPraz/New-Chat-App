import React, { ReactNode } from "react"
import { getSession } from "../../lib"
import { redirect } from "next/navigation"

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getSession()
  // console.log("layout ko session", session);

  //  why this below logic is used? it was casusing chrome to redirect again to login
  // if (session) {
  //   console.log("sessoin xa????????")

  //   redirect("/dashboard")
  // }

  return <>{children}</>
}
