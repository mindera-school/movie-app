import React from "react";
import "./index.css";

const SoonButton = ({ value, onClick }) => {
    return (
        <button
            className="soonButton"
            onClick={() => {
                onClick();
            }}
        >
            {value}
        </button>
    );
};

export default SoonButton;
