"use server"
import { postRequest } from "@/lib/fetch"
import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"
import { NextRequest, NextResponse } from "next/server"
import { parse } from "path"
import { redirect } from "next/navigation"

const key = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("100h") //'1day' normally
    .sign(key)
}

export async function decrypt(hashed: string) {
  try {
    const { payload } = await jwtVerify(hashed, key, { algorithms: ["HS256"] })

    // console.log("decrpt ko hai", payload);
    const user = payload
    return user
  } catch (err) {
    console.log("JWT error ", err)
    throw new Error("Invalid Token")
  }
}

// CREATE SESSION
export async function loginHai(payload: any) {
  try {
    //verify credentials and then get the user

    const res = await postRequest({
      endpoint: "/api/user/login",
      payload,
    })

    console.log("login ko res", res)
    console.log("login ko res status", res.status)

    if (res.status == 200) {
      const userDetail = {
        user: res.data.user,
        token: res.data.token,
      }

      //in res i get user's detail and token

      // THIS IS SESSION EXPIRY TIME
      const expires = new Date(Date.now() + 60 * 60 * 1000) // here we set expire to 10sec
      //  IN SESSION THERE IS HASED VALUE OF THAT USER DETAILS
      const session = await encrypt({ ...userDetail, expires })

      //save the session in a cookie
      cookies().set("session", session, { expires, httpOnly: true })
      //httponly means we can only read this in server
      // console.log("response lib", res);

      return {
        status: 200,
        message: "Successfully LoggedIn",
      }
    }
    if (res.status === 401) {
      return {
        status: 401,
        message: res.message,
      }
    }
  } catch (err) {
    // console.log("error login asdas", err);
    // console.log("error login asdas message", message);
    return {
      status: 400,
      message: "Password is fake!",
    }
  }
}

export async function logoutHai() {
  cookies().set("session", "", { expires: new Date(0) })
}

export async function getSession() {
  const session = cookies().get("session")?.value
  // console.log("session xa tw?", session);
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(req: NextRequest) {
  // console.log("-----------update vitraa");
  const session = req.cookies.get("session")?.value

  // console.log("updatesession vitraaaaa", session);
  if (!session) return

  //Refresh the session so it doesn't expires
  //if there is session then at every refresh set a new session in cookie

  const parsed = await decrypt(session) //in parsed it contains user detail token etc
  parsed.expires = new Date(Date.now() + 10 * 60 * 60 * 1000)
  const res = NextResponse.next()

  // res.cookies.set({
  //   name: "session",
  //   value: await encrypt(parsed),
  //   httpOnly: true,
  //   expires: parsed.expires,
  // });
  // res.cookies.set("session", await encrypt(parsed), {
  //   expires: parsed.expires,
  //   httpOnly: true,
  // });

  return res
}

export async function deleteSession() {
  cookies().delete("session")
  redirect("/login")
}

export async function verfiySession() {
  const cookie = cookies().get("session")?.value
  const session = await decrypt(cookie!)

  if (!session) {
    redirect("/login")
  }

  return { session }
}
