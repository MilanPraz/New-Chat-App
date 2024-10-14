"use client"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from "react"

export default function NextSessionProvider({
  children,
}: {
  children: ReactNode
}) {
  const clientid = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string

  return (
    <GoogleOAuthProvider clientId={clientid}>{children}</GoogleOAuthProvider>
  )
}
