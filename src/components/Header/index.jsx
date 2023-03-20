import React from "react";
import "./index.css";

const Header = ({ onSearchChange }) => {
    return (
        <form
            className="header"
            onSubmit={(e) => {
                e.preventDefault();
                onSearchChange(e.target.searchTerm.value);
                e.target.searchTerm.value = "";
            }}
        >
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

