"use client";
import React from "react";
import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {
  return (
    <AppProgressBar
      height="8px"
      color="#0577fd"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
