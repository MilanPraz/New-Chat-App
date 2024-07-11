"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ReactNode, createContext, useContext, useState } from "react";

interface SessionCtxProps {
  session: any;
  friend: any | undefined;
  setFriend: any | undefined;
  chatRoomId: any | undefined;
  setChatRoomId: any | undefined;
}

const SessionContext = createContext<SessionCtxProps | undefined>(undefined);

export const SessionProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: any;
}) => {
  // const [friend, setFriend] = useState<any | undefined>(undefined);
  // const [chatRoomId, setChatRoomId] = useState<any | undefined>(undefined);

  const [friend, setFriend] = useLocalStorage("friendDetail", undefined);
  const [chatRoomId, setChatRoomId] = useLocalStorage("chatRoomId", undefined);

  return (
    <SessionContext.Provider
      value={{ session, friend, setFriend, chatRoomId, setChatRoomId }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useAuth  must be used within  an AuthProvider");
  }

  return context;
};
