import React from "react";

const MovieDetail = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-details-overlay">
      <div className="movie-details">
        <button onClick={onClose} className="close-btn">X</button>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster !== "N/A" ? movie.Poster : ""} alt={movie.Title} />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
