import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu";
import Search from "./Components/Search";
import data from "./data.json";
import Bookmarked from "./Pages/Bookmarked/";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies/Movies";
import TV from "./Pages/TV";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [filteredArray, setFilteredArray] = useState(data);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("localData") || "");
    if (localData) {
      setFilteredArray(localData);
    }
  }, []);
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <Search
          setInputValue={setInputValue}
          data={data}
          setFilteredArray={setFilteredArray}
          inputValue={inputValue}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                inputValue={inputValue}
                filteredArray={filteredArray}
                setFilteredArray={setFilteredArray}
              />
            }
          />
          <Route
            path="/tv"
            element={
              <TV
                filteredArray={filteredArray}
                setFilteredArray={setFilteredArray}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                filteredArray={filteredArray}
                setFilteredArray={setFilteredArray}
              />
            }
          />
          <Route
            path="/bookmark"
            element={
              <Bookmarked
                filteredArray={filteredArray}
                setFilteredArray={setFilteredArray}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
