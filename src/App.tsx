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
  const [array, setArray] = useState([] as any);
  const [filteredArray, setFilteredArray] = useState([] as any);

  useEffect(() => {
    try {
      const localData = JSON.parse(localStorage.getItem("localData") || "");
      if (localData.length > 0) {
        setArray(localData);
        setFilteredArray(localData);
      } else {
        setArray(data);
        setFilteredArray(data);
      }
    } catch {
      setArray(data);
      setFilteredArray(data);
    }
  }, []);
  return (
    <div className="App">
      <Menu />
      <div>
        <div className="container">
          <Search
            setInputValue={setInputValue}
            data={array}
            setFilteredArray={setFilteredArray}
            inputValue={inputValue}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  array={array}
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
    </div>
  );
}

export default App;
