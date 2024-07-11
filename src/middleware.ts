import { NextRequest, NextResponse } from "next/server";
import { getSession, updateSession } from "./lib";

const privateRoutes = ["/dashboard", "/chatroom", "/people", "/profile"];

// CHECKING IF USER IS IN PUBLIC OR PRIVATE ROUTE
export function isPrivateRoute(pathname: string): boolean {
  for (const path of privateRoutes) {
    if (pathname.startsWith(path)) return true;
  }
  return false;
}

// CHECKING IF USER HAS TOKEN OR NOT
const handleUnauthorized = (req: NextRequest) => {
  const loginUrl = new URL("/login", req.url).toString();

  const res = NextResponse.redirect(loginUrl);
  res.cookies.delete("session");
  return res;
};

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  if (/\.(png|svg|jpg|webp|mp3|geojson)$/.test(pathname)) return;

  // console.log("private ho?", isPrivateRoute(pathname));
  if (isPrivateRoute(pathname)) {
    const session = await getSession();
    if (!session) {
      return handleUnauthorized(req);
    }
    return await updateSession(req);
  }
  return NextResponse.next();
}
