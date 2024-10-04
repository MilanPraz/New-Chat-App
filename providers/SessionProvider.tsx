"use client"
import { useLocalStorage } from "@uidotdev/usehooks"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { io } from "socket.io-client"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

interface SessionCtxProps {
  session: any
  friend: any | undefined
  setFriend: any | undefined
  chatRoomId: any | undefined
  setChatRoomId: any | undefined
  setActiveUsers: any | undefined
  activeUsers: any | undefined
  socket: any
}

const SessionContext = createContext<SessionCtxProps | undefined>(undefined)

export const SessionProvider = ({
  children,
  session,
}: {
  children: ReactNode
  session: any
}) => {
  // const [friend, setFriend] = useState<any | undefined>(undefined);
  // const [chatRoomId, setChatRoomId] = useState<any | undefined>(undefined);

  const [friend, setFriend] = useLocalStorage("friendDetail", undefined)
  const [chatRoomId, setChatRoomId] = useLocalStorage("chatRoomId", undefined)
  const [socket, setSocket] = useState<any>(null)
  const [activeUsers, setActiveUsers] = useState<any>([])

  useEffect(() => {
    const socketInstance = io(BACKEND_URL)
    setSocket(socketInstance)

    return () => {
      socketInstance.disconnect()
    }
  }, [])
  return (
    <SessionContext.Provider
      value={{
        session,
        friend,
        setFriend,
        chatRoomId,
        setActiveUsers,
        activeUsers,
        setChatRoomId,
        socket,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)

  if (!context) {
    throw new Error("useAuth  must be used within  an AuthProvider")
  }

  return context
}
