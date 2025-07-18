import React from "react";

const Filter = ({ value, onChange, placeholder = " Buscar...", filterId }) => {
    return (
        <input
            type="search"
            className="filter-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            name="search"
            id={filterId}
            aria-label={placeholder}
            autoComplete="on"
        />
    );
};

export default Filter;