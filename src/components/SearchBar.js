import React from "react";

const SearchBar = ({ sort, setSort, setFilter, query, setQuery }) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sort === "Alphabetically"}
          onChange={(e) => setSort(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sort === "Price"}
          onChange={(e) => setSort(e.target.value)}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
      <br></br>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
};

export default SearchBar;
