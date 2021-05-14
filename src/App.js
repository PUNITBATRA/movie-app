import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Modal from "./components/Modal";
function App() {
  const FeaturedAPI =
    "https://api.themoviedb.org/3/discover/movie?api_key=67cd73109cef2157b09faa2fd7a187d3&language=en-US&sort_by=popularity.desc&page=2";

  const SearchAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=67cd73109cef2157b09faa2fd7a187d3&query=";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    getMovies(FeaturedAPI);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SearchAPI + searchTerm);
      setSearchTerm("");
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <header>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </header>
      </form>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Movie
              key={movie.id}
              {...movie}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
      </div>
      {selectedMovie && (
        <Modal
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </>
  );
}

export default App;
