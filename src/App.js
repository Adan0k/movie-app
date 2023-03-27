import React, { useState, createContext, useEffect } from 'react';
import Search from './components/Search';
import './App.css';
import MovieGrid from './components/MovieGrid';
import ComingBtn from './components/ComingBtn';
import Details from "./components/Details";

export const movieContext = createContext(null);

function App() {

  const [movies, setMovies] = useState([]);
  const [box, setBox] = useState([]);
  const [displayed, setDisplayed] = useState("top");
  const [current, setCurrent] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getMovies(setMovies);
    getBox(setBox);
  }, []);

  const movieLists = {
    top: movies,
    box: box
  }


  return (
    <div className="App">
      <header>
        <movieContext.Provider value={{ set: setDisplayed, displayed: displayed }}>
          <ComingBtn />
        </movieContext.Provider>
        <Search set={setFilter} />
      </header>
      <movieContext.Provider value={{ current: current, setCurrent: setCurrent }}>
        <Details />
      </movieContext.Provider>
      <movieContext.Provider value={{ movies: filterMovies(movieLists[displayed], filter), displayed: displayed, setCurrent: setCurrent }}>
        <MovieGrid />
      </movieContext.Provider>
    </div>
  );
}

const getMovies = (set) => {
  fetch("https://imdb-api.com/en/API/Top250Movies/k_zg2hsr14")
    .then((response) => response.json())
    .then(data => set(data.items))
    .catch((err) => console.log(err));
}
const getBox = (set) => {
  fetch("https://imdb-api.com/en/API/BoxOffice/k_zg2hsr14")
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
