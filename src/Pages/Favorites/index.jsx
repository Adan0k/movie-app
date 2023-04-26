import React, { useContext, useEffect, useState } from "react";
import { movieContext } from "../../App";
import { query, collection, getDocs } from "firebase/firestore";
import Firebase from "../../gateway/Firebase";
import Header from "../../components/Header";
import ComingBtn from "../../components/ComingBtn";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import MovieGrid from "../../components/MovieGrid";

const Favorites = () => {
    const { setFilter, user, setCurrent } = useContext(movieContext)
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getFavorites(user, setFavorites);
    }, [])
    useEffect(() => console.log(favorites), [favorites])
    return (
        <>
            <Header>
                <ComingBtn />
                <Navbar />
                <Search set={setFilter} />
            </Header>
            <MovieGrid movies={favorites} displayed="ajsdnla" setCurrent={setCurrent} isFavorites={true} >
            </MovieGrid>
        </>
    );
}

const getFavorites = async (user, setFavorites) => {
    const favoritesRef = collection(
        Firebase.firestore,
        "users",
        user?.uid,
        "favorites"
    );
    const q = query(favoritesRef);
    const querySnapshot = await getDocs(q)

    const fav = [];
    querySnapshot.forEach((doc) => console.log(doc.data));

    setFavorites(fav);
}

export default Favorites;