import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Spinner from "@/components/spinner/LoadingSpinner";
import ModalFrame from "@/components/modal/ModalFrame";
import { store } from "@/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./pages";
import "@/assets/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
        <ModalFrame />
        <Spinner />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
