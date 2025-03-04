import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Убедитесь, что этот импорт есть
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
