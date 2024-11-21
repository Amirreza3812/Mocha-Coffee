import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./Fonts/Yekan.ttf";
import "./Fonts/IRANSans.ttf";
import "./Fonts/IRANSans_Bold.ttf";
import "./Fonts/IRANSans_Light.ttf";
import "./Fonts/IRANSans_Medium.ttf";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
