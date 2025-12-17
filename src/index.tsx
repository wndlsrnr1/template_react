import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
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

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
