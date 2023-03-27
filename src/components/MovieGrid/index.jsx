import React, { useContext } from "react";
import Movie from "../Movie";
import { movieContext } from "../../App";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 4rem;
  column-gap: 1rem;
  margin: 0 0 5% 5%;
`;

const MovieGrid = () => {
  const { movies, displayed, setCurrent } = useContext(movieContext);
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
        />
      ))}
    </Grid>
  );
};

export default MovieGrid;
