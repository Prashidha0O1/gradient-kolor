import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { SketchPicker } from "react-color";

function App() {
  return (
   <SketchPicker />
  );
}

export default App;
