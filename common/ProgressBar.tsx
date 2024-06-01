"use client";
import React from "react";
import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {
  return (
    <AppProgressBar
      height="20px"
      color="#DDA322"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
