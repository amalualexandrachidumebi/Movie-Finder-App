import './App.css'
import React, { useState } from "react";
import Header from "./component/Header";
import MovieList from "./component/MovieList";
import MovieDetail from "./component/MovieDetail";
import Spinner from "./component/Spinner"; 


const App = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedGenre, setSelectedGenre] = useState("");
   const [releaseYear, setReleaseYear] = useState("");
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);
   const [selectedMovie, setSelectedMovie] = useState(null);



    const handleSearch = async () => {
    console.log("Searching with:");
    console.log("Term:", searchTerm);
    console.log("Genre:", selectedGenre);
    console.log("Year:", releaseYear);

    alert(
    `Search Term: ${searchTerm}\nGenre: ${selectedGenre}\nYear: ${releaseYear}`
   );
   
   const API_KEY = "7ab90285";

    if (!searchTerm.trim()) return;
    setLoading(true);

    try {
      let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;
      if (releaseYear) {
        url += `&y=${releaseYear}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
      const fullMovies = await Promise.all(
       data.Search.map(async (movie) => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`);
      return await res.json();
    })
    );
    setMovies(fullMovies);
      } else {
        setMovies([]);
        alert(data.Error);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      alert("Failed to fetch movies");
    }

    setLoading(false);
  };

    const filteredMovies = selectedGenre
  ? movies.filter((movie) =>
      movie.Genre && movie.Genre.includes(selectedGenre)
    )
  : movies;
  

  return (
    <div className="app-container">
      <h1 className="app-title">🎬 Movie Finder App</h1>
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        releaseYear={releaseYear}
        setReleaseYear={setReleaseYear}
        onSearch={handleSearch}
      />

       {loading && <p>Loading movies...</p>}
       {loading && <Spinner />}
       {!loading && <MovieList movies={filteredMovies} onSelect={setSelectedMovie}
/>}
       {loading && <p className="loading">Loading movies... 🍿</p>}
       {!loading && filteredMovies.length === 0 && (
  <p className="no-results">No movies found </p>
)}

{selectedMovie && (
  <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
)}


    </div>
  );
};

export default App;
































/* <MovieList /> */