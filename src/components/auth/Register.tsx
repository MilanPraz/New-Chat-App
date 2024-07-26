"use client";
import { H4 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, TRegisterSchema } from "../../../schema/auth.schema";
import { useForm } from "react-hook-form";
import FormError from "../form/FormError";
import { useRegisterMutation } from "../../../hooks/mutations/auth";
import { useRouter } from "next/navigation";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });
  const router = useRouter();
  const { mutateAsync, isPending } = useRegisterMutation();
  const onSubmit = (formdata: TRegisterSchema) => {
    // console.log("Submit");
    const promise = mutateAsync(formdata).then(() => {
      router.push("/login");
      // console.log("done");
    });

    toast.promise(promise, {
      loading: "Signing up...",
      success: "Successfully Registered!",
      error: (err) => err.msg || "Something Went Wrong",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
      {/* <Toaster /> */}
      <div className=" space-y-2">
        <Label>Username</Label>
        <Input {...register("name")} placeholder="Eg:Hero" />
        <FormError>{errors.name?.message}</FormError>
      </div>
      <div className=" space-y-2">
        <Label>Email</Label>
        <Input {...register("email")} placeholder="Enter your email" />
        <FormError>{errors.email?.message}</FormError>
      </div>
      <div className=" space-y-2">
        <Label>Password</Label>
        <Input
          {...register("password")}
          placeholder="Enter a strong password"
        />
        <FormError>{errors.password?.message}</FormError>
      </div>
      <Button type="submit" className=" w-full">
        Submit
      </Button>
    </form>
  );
};

export default Register;
