import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().min(1, { message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Username is required." }),
  email: z.string().email().min(1, { message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof RegisterSchema>;
