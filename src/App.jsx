import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { SketchPicker } from "react-color";
import { event } from "@tauri-apps/api";
import { invoke } from "@tauri-apps/api/tauri";

function App() {
  const [color, setColor] = useState("#000000");
  const handleChange = (newColor) => {
    setColor(newColor.hex);
  }
  return (
   <SketchPicker 
   color={color}
   onChange = {handleChange}
   />
  );
}

export default App;
