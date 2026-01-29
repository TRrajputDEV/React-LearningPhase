import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Code from "./Code.jsx";
import Navbar from "./Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  // <App />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="code" element={<Code />} />
      <Route path="code/:userId" element={<Code />} />
    </Routes>
  </BrowserRouter>
);
