import React from "react";
import "./MovieCard.css"; // we'll style it here
const MovieCard = ({ movie, onClick}) => {
  return (
     <div className="movie-card"  onClick={onClick}>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
