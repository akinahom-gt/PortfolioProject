import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./assets/About";
import Information from "./assets/Information";
import Experience from "./assets/Experience";

function App() {
  return (
    <>
      <div className="bg-[#0f172a] hscreen ">
        <Information />
        
      </div>
    </>
  );
}

export default App;

