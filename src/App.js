import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import SearchIcon from './search.svg'
import './App.css'

const API_URL = "http://www.omdbapi.com/?apikey=9b010720";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    getMovies(search);
  }, [search]);

  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className="search">
        <input
          placeholder="Enter a movie"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img src={SearchIcon} alt="search" onClick={() => getMovies(search)}/>
      </div>
      {
        movies?.length > 0?
        (
            <MovieList movies = {movies}/>
        ):(
          <div className="empty">
            <h1>No Movies Found</h1>
          </div>
        )
      }

      
    </div>
  );
};

export default App;
