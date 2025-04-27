import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setInitialTheme } from "./lib/theme";

import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./provider/AuthContext.tsx";
import { Toaster } from "sonner";
import { DashboardProvider } from "./provider/DashboardContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

setInitialTheme();

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <DashboardProvider>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </DashboardProvider>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
