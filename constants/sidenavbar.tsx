import { Home, MessageCircleMore, UserCog, UsersRound } from "lucide-react";
import { ReactNode } from "react";

export const menus = [
  {
    title: "Home",
    to: "/",
    icon: <Home size={16} />,
  },
  {
    title: "Chat",
    to: "/chatroom",
    icon: <MessageCircleMore size={16} />,
  },
  {
    title: "People",
    to: "/people",
    icon: <UsersRound size={16} />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <UserCog size={16} />,
  },
];
