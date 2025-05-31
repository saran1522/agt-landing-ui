"use client";
import React, { useState } from "react";

function ViewScreen() {
  const [view, setView] = useState("designer");
  return (
    <div className="bg-[#4787FF] p-6 text-white text-sm">
      <div className="h-94 bg-white mb-6"></div>
      <div className="flex rounded-full border border-blue-400 p-1 w-fit mx-auto">
        <button
          className={`px-3 py-1.5 rounded-full font-medium cursor-pointer ${
            view === "designer" ? "bg-white text-[#4787FF]" : "bg-transparent"
          }`}
          onClick={() => setView("designer")}
        >
          Designer view
        </button>
        <button
          className={`px-3 py-1.5 rounded-full font-medium cursor-pointer ${
            view === "code" ? "bg-white text-[#4787FF]" : "bg-transparent"
          }`}
          onClick={() => setView("code")}
        >
          Code view
        </button>
      </div>
    </div>
  );
}

export default ViewScreen;
