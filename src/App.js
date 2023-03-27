import React, { useState, createContext, useEffect } from 'react';
import Search from './components/Search';
import './App.css';
import MovieGrid from './components/MovieGrid';
import ComingBtn from './components/ComingBtn';

export const movieContext = createContext(null);

function App() {

  const [movies, setMovies] = useState([]);
  const [box, setBox] = useState([]);
  const [displayed, setDisplayed] = useState("top");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getMovies(setMovies);
    getBox(setBox);
  }, []);

  const movieLists = {
    top: movies,
    box: box
  }

  console.log(movieLists[displayed]);

  return (
    <div className="App">
      <header>
        <movieContext.Provider value={{ set: setDisplayed, displayed: displayed }}>
          <ComingBtn />
        </movieContext.Provider>
        <Search set={setFilter} />
      </header>
      <movieContext.Provider value={filterMovies(movieLists[displayed], filter)}>
        <MovieGrid displayed={displayed} />
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
const getBox = (set) => {
  fetch("https://imdb-api.com/en/API/BoxOffice/k_4ut5ce61")
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
