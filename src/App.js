import React, { useState } from "react";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movie-list/MovieList";

import requests from "./requests.js";

import "./App.css";

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState(
    requests.fetchTrending
  );

  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOptions={setSelectedOptions} />
      <MovieList selectedOptions={selectedOptions} />
    </div>
  );
};

export default App;
