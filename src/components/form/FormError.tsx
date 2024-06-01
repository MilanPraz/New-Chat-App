import React, { FC } from "react";
import { FieldError } from "react-hook-form";

type TFormError = {
  children?: string | FieldError;
};
const FormError: FC<TFormError> = ({ children }) => {
  return (
    <p className=" text-red-500 text-xs">{children ? String(children) : ""}</p>
  );
};

export default FormError;
