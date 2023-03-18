import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  min-height: 100%;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  background-color: #373b69;
  & div {
    width: 100%;
    overflow: hidden;
    & img {
      width: 100%;
    }
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5% 10% 5% 10%;

  & span {
    color: ${(props) => (props.rate >= 7 ? "red" : "green")};
  }
  & h3 {
    max-width: 50%;
    color: white;
  }
`;
const InfoDrawer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  width: 100%;
  height: ${(props) => props.visibility.heigth};
  z-index: 100;
  background-color: white;
  display: ${(props) => props.visibility.display};
  border-radius: 0 0 10px 10px;
  padding: 10px;

  & ul {
    list-style: none;
    height: fit-content;
  }
`;

const Movie = ({ img, name, rating, rank, crew }) => {
  const [drawerVisibility, setDrawerVisibility] = useState({});
  useEffect(() => closeDrawer(setDrawerVisibility), []);
  return (
    <div
      onMouseOver={() => openDrawer(setDrawerVisibility)}
      onMouseOut={() => closeDrawer(setDrawerVisibility)}
    >
      <Container rate={rating}>
        <div>
          <img src={img} />
        </div>
        <Info>
          <h3>{name}</h3>
          <span>{rating}</span>
        </Info>
        <InfoDrawer visibility={drawerVisibility}>
          <ul>
            <li>
              <span>Rank: </span>
              <span>{rank}</span>
            </li>
            <li>
              <span>Crew: </span>
              <p>{crew}</p>
            </li>
          </ul>
        </InfoDrawer>
      </Container>
    </div>
  );
};

const openDrawer = (set) => {
  set({
    display: "block",
    heigth: "50%",
  });
};
const closeDrawer = (set) => {
  set({
    display: "none",
    heigth: "0",
  });
};

export default Movie;
