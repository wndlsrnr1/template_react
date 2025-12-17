import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
const RootPage = lazy(() => import("@/pages/(root)/RootPage"));
const UserPage = lazy(() => import("@/pages/user/UserPage"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <RootPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
