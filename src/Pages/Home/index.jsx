import React, { useContext, useEffect } from "react";
import { movieContext } from "../../App";
import { Navigate } from "react-router-dom";
import MovieGrid from "../../components/MovieGrid";
import Details from "../../components/Details";
import Header from "../../components/Header";
import ComingBtn from "../../components/ComingBtn";
import Search from "../../components/Search";
import Navbar from "../../components/Navbar"

const Home = () => {
    const { movies, displayed, setCurrent, setFilter } = useContext(movieContext);
    return (
        <>
            <Header>
                <ComingBtn />
                <Navbar />
                <Search set={setFilter} />
            </Header>
            <MovieGrid movies={movies} displayed={displayed} setCurrent={setCurrent} isFavorites={false} />
            <Details />
        </>
    );
}

export default Home;