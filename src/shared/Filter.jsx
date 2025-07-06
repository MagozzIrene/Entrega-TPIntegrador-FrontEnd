import React from "react";

const Filter = ({ value, onChange, placeholder = " Buscar..." }) => {
    return (
        <input
            type="text"
            className="filter-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default Filter;