import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "../src";

function App() {
  return (
    <div>
      click me: <Button>hi</Button>
    </div>
  );
}


createRoot(document.getElementById("root")!).render(<App />);