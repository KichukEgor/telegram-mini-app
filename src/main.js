import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import App from "./App.tsx";
import { LangProvider } from "./components/LangProvider/LangProvider";
import "./index.css";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(SWRConfig, { children: _jsx(LangProvider, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }) }) }));
