import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/weatherSlice";
import { AppDispatch } from "../redux/store";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>, dispatch: AppDispatch) {
    if (e.key === "Enter") {
      dispatch(getData(searchInput));
    }
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <div>
        <div className="relative h-10">
          <input
            placeholder="Search a city..."
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => handleEnter(e, dispatch)}
            className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-60 outline-none"
            name="search"
          />

          <svg
            className="size-6 absolute top-3 right-3 text-gray-500"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
