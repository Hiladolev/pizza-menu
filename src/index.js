import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

function App() {
  return <h1>Hello React!</h1>;
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
