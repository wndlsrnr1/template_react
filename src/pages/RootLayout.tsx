import { Outlet } from "react-router-dom";
import { AuthProvider } from "@/auth";
import Spinner from "@/components/spinner/LoadingSpinner";
import ModalFrame from "@/components/modal/ModalFrame";
import AlertProvider from "@/components/alert/AlertProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Outlet />
      <ModalFrame />
      <Spinner />
      <AlertProvider />
    </AuthProvider>
  );
}

