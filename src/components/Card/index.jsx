import React from "react";
import "./index.css";

const Card = ({ movie }) => {

    const rateColor = getRateColor(+movie.imDbRating);

    const rate = (movie.imDbRating === null) ? "" : (<h3 className={`rating ${rateColor}`}>{movie.imDbRating}</h3>);

    return (
        <div className="cardContainer">
            <div className="card">
                <div className="front">
                    <img src={movie.image} alt="Movie" />
                    {rate}
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

function getRateColor(rate) {
    if (rate >= 7) {
        return "green";
    }
    if (rate < 7 && rate > 3) {
        return "yellow";
    }
    return "red";
}

export default Card;
