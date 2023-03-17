import React, { useContext } from "react";
import "./index.css";
import Card from "../Card";
import { AllMovies } from "../../App";

const Container = ({ searchTerm }) => {
    const { myAllMovies } = useContext(AllMovies);

    if (!myAllMovies) {
        return <main></main>;
    }

    const filteredMovies = myAllMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            {makeCards(filteredMovies)}
        </main>
    );
};

function makeCards(movies) {
    return movies.map((movie) => <Card movie={movie} key={movie.id} />);
}

export default Container;
