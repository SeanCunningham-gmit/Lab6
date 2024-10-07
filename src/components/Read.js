import React from 'react';
import Movies from './Movies'; // Import Movies component

const Read = () => {
  // Define a list of movies as a array of objects
  const movies = [
    {
      "Title": "Avengers: Infinity War", 
      "Year": "2018",                    
      "imdbID": "tt4154756",             
      "Type": "movie",                   
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" // URL to the movie poster
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];

  // Return a div for the Movies component
  // Pass "movies" array to the Movies component via the prop
  return (
    <div>
      <Movies myMovies={movies} /> {/* Render Movies component with movie data */}
    </div>
  );
};

export default Read;

