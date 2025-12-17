import { ReactNode } from "react";
import { ProtectedRoute } from "./ProtectedRoute";

interface ProtectedRouteWrapperProps {
  children: ReactNode;
}

export function ProtectedUserRoute({ children }: ProtectedRouteWrapperProps) {
  return <ProtectedRoute requireLogin>{children}</ProtectedRoute>;
}

export function ProtectedAdminRoute({ children }: ProtectedRouteWrapperProps) {
  return (
    <ProtectedRoute requireLogin requireStaff>
      {children}
    </ProtectedRoute>
  );
}

