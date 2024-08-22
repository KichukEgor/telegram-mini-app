import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import App from "./App.tsx";
import { LangProvider } from "./components/LangProvider/LangProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRConfig>
      <LangProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LangProvider>
    </SWRConfig>
  </StrictMode>
);
