import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Information from "./components/Information";
import Experience from "./components/Experience";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
function App() {
  return (
    <>
      <div className="bg-[#0f172a] min-h-screen max-w-full ">
        <Information />
        
      </div>
    </>
  );
}

export default App;

