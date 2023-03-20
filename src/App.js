import React, { useState, useEffect, createContext } from "react";
import Header from "./components/Header/index";
import Container from "./components/Container/index";

export const AllMovies = createContext(null);

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://imdb-api.com/en/API/Top250Movies/k_5thr0kpf", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const moviesData = JSON.parse(result).items;
        setMovies(moviesData);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="App">
      <AllMovies.Provider value={{ myAllMovies: movies }}>
        <Header onSearchChange={handleSearchChange} />
        <Container searchTerm={searchTerm} />
      </AllMovies.Provider>
    </div>
  );
}

export default App;