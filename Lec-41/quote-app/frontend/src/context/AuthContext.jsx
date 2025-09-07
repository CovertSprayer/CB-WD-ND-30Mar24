import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../api/auth";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}){
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (savedToken) => {
    try {
      const res = await getMe(savedToken);
      setUser(res);
    } catch (error) {
      console.error("Failed to fetch user", error);
      logout();
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token") || null;
    if(savedToken) {
      setToken(savedToken);
      fetchUser(savedToken).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [])

  const login = async (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    await fetchUser(newToken);
    setLoading(false);
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const value = {token, user, login, logout, isAuthenticated: !!user, loading};

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}