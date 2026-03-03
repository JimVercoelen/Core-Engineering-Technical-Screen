// TODO: Consider adopting a UI component framework (e.g. PrimeReact) for
// production use. Hand-rolled Tailwind components work fine for this demo
// but a framework provides accessible, tested primitives out of the box.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./components/App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
