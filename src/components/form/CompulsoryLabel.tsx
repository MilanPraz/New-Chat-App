import React, { ReactNode } from "react";
import { Label } from "../ui/label";

export default function CompulsoryLabel({ children }: { children: ReactNode }) {
  return (
    <Label>
      {children} <span className=" text-red-500">*</span>
    </Label>
  );
}
