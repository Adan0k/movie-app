import Movie from "../Movie";
import styled from "styled-components";
import { collection, doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { movieContext } from "../../App";
import Firebase from "../../gateway/Firebase";
import { async } from "@firebase/util";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 4rem;
  column-gap: 1rem;
  margin: 0 0 5% 5%;
`;

const MovieGrid = ({ movies, displayed, setCurrent, isFavorites }) => {
  const { user } = useContext(movieContext);

  return (
    <Grid>
      {movies.map((e) => (
        <Movie
          img={e.image}
          name={e.title}
          rating={e.imDbRating}
          rank={e.rank}
          crew={e.crew}
          gross={e.gross}
          weekend={e.weekend}
          weeks={e.weeks}
          box={displayed === "box"}
          onClick={() => setCurrent(e.id)}
          addFavorite={() => addFavorite(e, user)}
          isFavorites={isFavorites}
        />
      ))}
    </Grid>
  );
};

const addFavorite = async (movie, user) => {
  const favoriteRef = doc(
    collection(Firebase.firestore, "users", user.uid, "favorites"),
    movie.id
  )
  await setDoc(favoriteRef, movie);
}

export default MovieGrid;
