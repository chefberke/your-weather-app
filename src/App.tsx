import React from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import City from "./components/City";

function App() {
  return (
    <>
      <div className="w-full h-[100vh] bg-components">
        <div className="flex items-center justify-center h-full w-full">
          <div className="max-w-[38rem] w-[97%] h-[45rem] bg-black rounded-xl opacity-45"></div>
          <div className="absolute">
            <div>
              <Title />
              <Search />
            </div>
            <City />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
