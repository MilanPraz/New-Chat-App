import React, { ReactNode } from "react";
import { getSession } from "../../../lib";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();
  console.log("layout ko session", session);

  if (session) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
