import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelect }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onClick={() => onSelect(movie)} />
      ))}
       <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"} alt={movie.Title} />
          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MovieList;
