"use client";
import { H4 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "../../../schema/auth.schema";
import { useForm } from "react-hook-form";
import FormError from "../form/FormError";
import { useLoginRegister } from "../../../hooks/mutations/auth";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { mutateAsync, isPending } = useLoginRegister();
  const onSubmit = (formdata: TLoginSchema) => {
    const promise = mutateAsync(formdata).then((res) => {
      router.push("/");
      console.log("Submitted");
      console.log("Submitted", res);
    });

    toast.promise(promise, {
      loading: "Wait for while...",
      success: "Successfully Logged In",
      error: "Something Went Wrong",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
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

export default Login;
