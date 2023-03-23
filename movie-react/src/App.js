import "./App.css";
//1fbf7b90
import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=1fbf7b90";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search[0].Title);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return <h1>App</h1>;
};

export default App;
