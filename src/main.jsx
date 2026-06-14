import './index.css'
import React from "react";
import { createRoot } from "react-dom/client";
import GeneticPedigreeApp from "./GeneticPedigreeApp.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneticPedigreeApp />
  </React.StrictMode>
);
