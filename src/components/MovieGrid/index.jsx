import React, { useContext } from "react";
import Movie from "../Movie";
import { movieContext } from "../../App";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 0.1%;
  column-gap: 1px;
  margin: 0 0 5% 5%;
`;

const MovieGrid = () => {
  const movies = useContext(movieContext);
  return (
    <Grid>
      {movies.map((e) => (
        <Movie
          img={e.image}
          name={e.title}
          rating={e.imDbRating}
          rank={e.rank}
          crew={e.crew}
        />
      ))}
    </Grid>
  );
};

export default MovieGrid;
