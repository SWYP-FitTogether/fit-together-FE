import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ScrollArea } from "./components/ui/scroll-area.tsx";

createRoot(document.getElementById("root")!).render(
  <ScrollArea className="h-dvh">
    <App />
  </ScrollArea>
);
