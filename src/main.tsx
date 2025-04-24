import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setInitialTheme } from "./lib/theme";

import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

setInitialTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
