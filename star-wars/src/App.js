import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataFound, setDataFound] = useState(true);


  // We have used useCallback because we have used the function as useEffect dependency
  // as functions are object everytime component is rendered a new object will be created, this will cause bugs
  // useCallback is used to save the function as uses the same function everytime component is rendered
  const fetchMovieHandler = useCallback(async() => {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error(`Error! ${response.status}`);
      }
      const data = await response.json();
      const resMovies = data.results.map((movieObj) => {
        return {
          id: movieObj.episode_id,
          title: movieObj.title,
          openingText: movieObj.opening_crawl,
          releaseDate: movieObj.release_date,
        };
      });
      setDataFound(true);
      setMovies(resMovies);
      setIsLoading(false);
    } catch (error) {
      setDataFound(false);
      setIsLoading(false);
      console.log(error.message);
    }
  }, [])

  // This is used to run the fetch handler for the first time when component is mounted and everytime the handler will change
  useEffect(()=>{
    fetchMovieHandler()
  }, [fetchMovieHandler])

  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && dataFound && <p>Loading...</p>}
        {!isLoading && movies.length === 0 && !dataFound && (
          <p>No data found!</p>
        )}
      </section>
    </>
  );
}

export default App;
