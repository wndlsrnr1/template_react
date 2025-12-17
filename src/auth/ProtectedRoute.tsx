import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

interface ProtectedRouteProps {
  children: ReactNode;
  requireLogin?: boolean;
  requireStaff?: boolean;
}

export function ProtectedRoute({ children, requireLogin = false, requireStaff = false }: ProtectedRouteProps) {
  const { isLogin, isStaff, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (requireLogin && !isLogin) {
    return <Navigate to="/login" replace />;
  }

  if (requireStaff && (!isLogin || !isStaff)) {
    return <Navigate to="/user" replace />;
  }

  return <>{children}</>;
}

