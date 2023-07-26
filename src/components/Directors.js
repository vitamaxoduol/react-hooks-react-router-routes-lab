import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.name}>
          <h3>Name: {director.name}</h3>
          {/* <p>movie: {movie.time}</p> */}
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Directors;
