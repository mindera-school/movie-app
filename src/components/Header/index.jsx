import React from "react";
import "./index.css";

const Header = ({ onSearchChange }) => {
    return (
        <form className="header">
            <input
                type="text"
                placeholder="Search movies by title"
                className="searchBar"
                onChange={onSearchChange}
            />
        </form>
    );
};

export default Header;
