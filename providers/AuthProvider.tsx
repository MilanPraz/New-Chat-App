import { Children, createContext, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const login = ({ user, accessToken }: { user: any; accessToken: any }) => {
    setUser(user);
    setToken(accessToken);
  };

  const logout = () => {
    setUser(undefined);
    setToken(undefined);
    toast.success("Logout Successfully!!");
  };

  return (
    <>
      <AuthContext.Provider value={{ user, token, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
