import React, { useState, createContext, useEffect } from 'react';
import Search from './components/Search';
import './App.css';
import MovieGrid from './components/MovieGrid';

export const movieContext = createContext(null);

function App() {

  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => getMovies(setMovies), []);


  console.log(movies);

  return (
    <div className="App">
      <header>
        <Search set={setFilter} />
      </header>
      <movieContext.Provider value={filterMovies(movies, filter)}>
        <MovieGrid />
      </movieContext.Provider>
    </div>
  );
}

const getMovies = (set) => {
  fetch("https://imdb-api.com/en/API/Top250Movies/k_4ut5ce61")
    .then((response) => response.json())
    .then(data => set(data.items))
    .catch((err) => console.log(err));
}
const filterMovies = (movies, filter) => {
  if (filter === "") {
    return movies;
  }
  return movies.filter((e) => e.title.includes(filter));
}

export default App;
