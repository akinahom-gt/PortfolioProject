import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Information from "./components/Information";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <div className="bg-[#0f172a] min-h-screen w-full overflow-x-hidden">
        <Information />
        
      </div>
    </>
  );
}

export default App;

