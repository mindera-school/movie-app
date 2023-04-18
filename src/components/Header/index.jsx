import React, { useState } from "react";
import SoonButton from "./SoonButton";
import "./index.css";

const Header = ({ onClickMovieListChange, onSearchChange, moviesType }) => {

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target.searchTerm.value;
        onSearchChange(searchTerm);
        e.target.searchTerm.value = "";
    };

    const soonButtonText = (moviesType === "/soon") ? "All Movies" : "Comming Soon";

    return (
        <form className="header" onSubmit={handleSearchSubmit}>
            <SoonButton value={soonButtonText} onClick={onClickMovieListChange} />
            <input
                type="text"
                placeholder="Search movies by title"
                className="searchBar"
                name="searchTerm"
            />
        </form>
    );
};

export default Header;
