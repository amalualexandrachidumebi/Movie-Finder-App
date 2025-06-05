import React from "react";
import "./Header.css"; 
const Header = ({
  searchTerm,
  setSearchTerm,
  selectedGenre,
  setSelectedGenre,
  releaseYear,
  setReleaseYear,
  onSearch,
}) => {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="filter-select"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >

      
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
      </select>

      <input
        type="number"
        placeholder="Year"
        className="year-input"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        min="1900"
        max={new Date().getFullYear()}
      />

       <button className="search-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default Header;
