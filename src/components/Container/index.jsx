import React, { useContext } from "react";
import "./index.css";
import Card from "../Card";
import { AllMovies } from "../../App";

const Container = ({ moviesType, searchTerm }) => {
    const { movies, comingSoon } = useContext(AllMovies);

    if (!movies || !comingSoon) {
        return <main></main>;
    }


    const filteredMovies = (moviesType === "/all") 
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) 
    : comingSoon.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <main>{makeCards(filteredMovies)}</main>;
};

function makeCards(movies) {
    return movies.map((movie) => <Card movie={movie} key={movie.id} />);
}

export default Container;
