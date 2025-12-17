import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import $axios from "@/api/controller";
import { Profile } from "@/api/modules/accounts";

interface AuthContextValue {
  isLogin: boolean;
  isStaff: boolean;
  profile: Profile | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  isLogin: false,
  isStaff: false,
  profile: null,
  isLoading: true,
});

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 내부에서만 사용할 수 있습니다.");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const isLoginPath = pathname === "/login" || pathname.startsWith("/login/");

  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    ...$axios.accounts.getProfile(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    enabled: !isLoginPath,
  });

  const isLogin = !isError && !!profile;
  const isStaff = isLogin && !!profile?.is_staff;

  const value: AuthContextValue = {
    isLogin,
    isStaff,
    profile: profile ?? null,
    isLoading: isLoginPath ? false : isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

