import React, { useState, createContext, useEffect } from 'react';
import Home from "./Pages/Home"
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import GlobalStyles from './GlobalStyle';
import SignUp from './Pages/SignUp';
import Favorites from './Pages/Favorites';

export const movieContext = createContext(null);

function App() {

  const [movies, setMovies] = useState([]);
  const [box, setBox] = useState([]);
  const [displayed, setDisplayed] = useState("top");
  const [current, setCurrent] = useState("");
  const [filter, setFilter] = useState("");
  const [user, setUser] = useState(null);

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
      <GlobalStyles />
      <movieContext.Provider value={{ movies: filterMovies(movieLists[displayed], filter), displayed, setDisplayed, setCurrent, current, setFilter, user, setUser }}>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
            <Route path='favorites' element={<Favorites />}></Route>
            <Route path='signIn' element={<SignIn />}></Route>
            <Route path='signUp' element={<SignUp />}></Route>
          </Route>
        </Routes>
      </movieContext.Provider >
    </div >
  );
}

const getMovies = (set) => {
  fetch("https://imdb-api.com/en/API/Top250Movies/k_4ut5ce61")
    .then((response) => response.json())
    .then(data => set(data.items))
    .catch((err) => console.log(err));
}
const getBox = (set) => {
  fetch("https://imdb-api.com/en/API/ComingSoon/k_4ut5ce61")
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
