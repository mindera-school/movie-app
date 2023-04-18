import React, { useState, useEffect, createContext, useContext } from "react";
import Header from "./components/Header/index";
import Container from "./components/Container/index";

export const AllMovies = createContext(null);

function App() {
  const [movies, setMovies] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesType, setMoviesType] = useState("/all");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://imdb-api.com/en/API/ComingSoon/k_12345678", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const moviesData = JSON.parse(result).items;
        setComingSoon(moviesData);
      })
      .catch((error) => console.log("error", error));

    fetch("https://imdb-api.com/en/API/Top250Movies/k_12345678", requestOptions)
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

  const changeMovieList = () => {
    moviesType === "/all" ? setMoviesType("/soon") : setMoviesType("/all");
  };

  return (
    <div className="App">
      <AllMovies.Provider value={{ movies, comingSoon }}>
        <Header
          onClickMovieListChange={changeMovieList}
          onSearchChange={handleSearchChange}
          moviesType={moviesType}
        />
        <Container moviesType={moviesType} searchTerm={searchTerm} />
      </AllMovies.Provider>
    </div>
  );
}

export default App;
