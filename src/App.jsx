import React from "react";
import { useState, useContext } from "react"

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="text-black font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
         <img src="" alt="search" />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                //submit the form
              }
            }}
            type="text"
            className="focus:outline-none  text-[#212121] text-lg "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
    </div>
  );
};

export default App