import React from "react";
import "./index.css";

const Card = ({ movie }) => {
    return (
        <div className="cardContainer">
            <div className="card">
                <div className="front">
                    <img src={movie.image} alt="Movie" />
                    <h3 className="rating">{movie.imDbRating}</h3>
                </div>
                <div className="back">
                    <h2>{movie.title}</h2>
                    <h3>{movie.year}</h3>
                    <span className="crewContainer">
                        <span className="crewText">Crew:</span>
                        <span className="crew">{movie.crew}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
