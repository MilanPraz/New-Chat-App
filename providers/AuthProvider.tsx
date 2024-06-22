"use client";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useGetUserDetail } from "../hooks/query/User";

const AuthContext = createContext<any>(null);

type User = {
  _id: string;
  name: string;
  email: string;
  pic: string;
};

export const AuthProvider = ({ children }: { children: any }) => {
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, []);
  // const myToken = localStorage.getItem("token")!;

  const [user, setUser] = useState<User | undefined>(undefined);
  const [chatroomFriend, setChatroomFriend] = useState<any | undefined>(
    undefined
  );
  const [token, setToken] = useState<string | undefined>(undefined);
  const [chatroomId, SetChatroomId] = useState<string | undefined>(undefined);

  const { data: OldUser, isSuccess } = useGetUserDetail(token!);

  useEffect(() => {
    if (isSuccess && OldUser) {
      setUser(OldUser);
    }
  }, [isSuccess, OldUser]);
  const login = ({ user, accessToken }: { user: any; accessToken: any }) => {
    setUser(user);
    setToken(accessToken);
    localStorage.setItem("token", accessToken);
  };

  const logout = () => {
    setUser(undefined);
    setToken(undefined);
    toast.success("Logout Successfully!!");
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          token,
          login,
          logout,
          chatroomId,
          SetChatroomId,
          chatroomFriend,
          setChatroomFriend,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

//custom hook form useContext

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};
