import { useState } from "react";
import { useEffect } from "react";

function ToggleButtons() {
  const [activeButton, setActiveButton] = useState("All");

  const toggleActive = (button: string) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="flex w-3/4 p-2 rounded-lg bg-[#132c43] md:w-min lg:w-min">
        <button
          onClick={() => toggleActive("All")}
          className={`w-32 h-10 flex items-center justify-center rounded-sm ${
            activeButton === "All"
              ? "bg-purple-600 text-white "
              : "text-gray-300 "
          } transition-all duration-300 ease-in-out focus:outline-none `}
        >
          All
        </button>

        <button
          onClick={() => toggleActive("Movies")}
          className={`w-32 h-10 flex items-center justify-center rounded-sm ${
            activeButton === "Movies"
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "text-gray-300"
          } transition-all duration-800 ease-in-out focus:outline-none  `}
        >
          Movies
        </button>
        <button
          onClick={() => toggleActive("TV Shows")}
          className={`w-32 h-10 flex items-center justify-center rounded-sm ${
            activeButton === "TV Shows"
              ? "bg-purple-600 text-white"
              : "text-gray-300"
          } transition-all duration-800 ease-in-out focus:outline-none `}
        >
          TV Shows
        </button>
      </div>
    </>
  );
}

export default ToggleButtons;
