import * as React from "react";
import { createRoot } from "react-dom/client";
import DVDLogoAnimation from "../dist/index.modern";

const App = () => {
  return (
    <div
      style={{
        height: "1000px",
        width: "1000px",
        border: "5px solid black",
        margin: "auto",
      }}
    >
      <DVDLogoAnimation />
    </div>
  );
};

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
// Create a root.
const root = createRoot(container);

// Initial render
root.render(<App />);
