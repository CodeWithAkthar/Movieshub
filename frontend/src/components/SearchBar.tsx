import { useState } from "react";
import {  useAppDispatch } from "@/app/hooks";
import { useEffect } from "react";
import searchIcon from "../assets/search.png";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  
  return (
    <div className="mt-5 mr-5">
      <div
        className={`relative flex items-center w-full p-4 transition duration-300 bg-gray-800 bg-opacity-50 border border-transparent rounded-lg shadow-md md:w-1/2  ${
          isFocused ? "border-purple-500 shadow-lg" : ""
        }  `}
      >
        <img src={searchIcon} alt="" className="w-8 h-8 ml-0 text-gray-400 " />
        <div className="w-full ml-3 ">
          <input
            type="text"
            className={`w-full text-lg leading-tight text-white placeholder-transparent bg-transparent focus:outline-none font-boring ${
              isFocused || inputValue ? "pt-6" : "pt-4"
            }`}
            placeholder={
              isFocused || inputValue ? "" : "Search movies or tv shows"
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label
            className={`absolute left-12 top-6 transition-all  duration-300 transform ${isFocused || inputValue ? '-translate-y-4 -translate-x-6 scale-75 text-gray-400' : 'top-3 text-gray-500'}`}
          >
            Search movies or tv shows
          </label>
          {isFocused && inputValue === "" && (
            <span className="absolute ml-5 text-sm text-gray-400 left-8 top-8">
              eg: Avenger
            </span>
          ) }
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
