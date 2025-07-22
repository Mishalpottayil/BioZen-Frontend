import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ textAlign: "center", padding: "40px", fontFamily: "sans-serif" }}>
    <h1>🌱 BioZen Energy</h1>
    <p>This is your React frontend – successfully fixed and Vercel-ready!</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);