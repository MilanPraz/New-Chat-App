"use client"
import { H4 } from "@/components/typography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { TLoginSchema, loginSchema } from "../../../schema/auth.schema"
import { useForm } from "react-hook-form"
import FormError from "../form/FormError"
import { useGoogleAuth, useLoginRegister } from "../../../hooks/mutations/auth"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import { createCookie, loginHai } from "../../lib"
import { useGoogleLogin } from "@react-oauth/google"
import { signIn, useSession } from "next-auth/react"
import axios from "axios"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()
  const { mutateAsync, isPending } = useGoogleAuth()
  const onSubmit = async (formdata: TLoginSchema) => {
    console.log("clicked form?")
    // const promise = mutateAsync(formdata).then((res) => {
    //   router.push("/");
    //   console.log("Submitted");
    //   console.log("Submitted", res);
    //   login({ user: res.user, accessToken: res.token });
    // });
    const res = await loginHai(formdata)
    console.log("yeta form submit bata", res?.status)
    if (res?.status == 200) {
      console.log("login success")

      toast.success("Successfully LoggedIn")
      router.push("/dashboard")
      console.log("push paxi")
    }

    if (res?.status === 401) {
      const {
        message: { message: msg },
      } = res
      toast.error(msg)
    }
    // toast.promise(promise, {
    //   loading: "Wait for while...",
    //   success: "Successfully Logged In",
    //   error: "Something Went Wrong",
    // });
  }

  const responseGoogle = async (authResult: any) => {
    try {
      console.log("google auth res", authResult)

      if (authResult.code) {
        const res = await mutateAsync({ code: authResult.code })

        if (res.status == 200) {
          const userDetail = {
            user: res.data.user,
            token: res.data.token,
          }

          createCookie(userDetail)
          router.push("/dashboard")
          toast.success("Successfully LoggedIn")
        }
        // if (res.status === 401) {
        //   return {
        //     status: 401,
        //     message: res.message,
        //   }
        // }
        console.log("res k xa", res)
      }
    } catch (err) {
      console.log("error while requrest in google code", err)
    }
  }

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
    // redirect_uri: "http://localhost:3000",
  })

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
      <div>
        <div
          onClick={() => handleGoogleLogin()}
          className=" text-xl flex items-center justify-center gap-4  border-2 cursor-pointer border-primary py-2 rounded-lg font-bold text-center"
        >
          Sign In with Google{" "}
          <div>
            <img src="/google.png" alt="google logo" width={40} height={40} />
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
