import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className=" min-h-screen flex items-center justify-center flex-col gap-4">
      <p className=" text-white text-center text-2xl font-medium">New here?</p>

      <Button>
        <Link href="/login">Login Now!</Link>
      </Button>
    </div>
  );
}
