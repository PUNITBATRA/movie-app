import React from "react";
const ImgAPI = "https://image.tmdb.org/t/p/w1280";

const setVote = (vote) => {
  if (vote >= 8) return "green";
  else if (vote >= 6) return "orange";
  else return "red";
};
const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? ImgAPI + poster_path
            : "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVote(vote_average)}`}>{vote_average}</span>
      </div>

      <div className="movie-over">
        <h3>Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};
export default Movie;
