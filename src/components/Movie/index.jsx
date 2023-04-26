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
  background-color: #373b69;
  box-sizing: border-box;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }
  & .imgLayer {
    cursor: pointer;
    width: 100%;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10%;
  height: 30%;

  & span {
    color: ${(props) => (props.rate)};
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
    display: flex;
    flex-direction: column;
    align-items: center;

    & li {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: left;
      width: 80%;
      margin: 10px 0 1px 0;
    }
  }
  & .favorite{
    display: ${props => props.favorite ? "none" : "block"};
    position: absolute;
    top: 0;
    right: 10%
  }
`;

const Movie = ({ img, name, rating, rank, crew, gross, weekend, weeks, box, onClick, addFavorite, isFavorite }) => {
  const [drawerVisibility, setDrawerVisibility] = useState({});
  useEffect(() => closeDrawer(setDrawerVisibility), []);

  let InfoDrawerContent = <ul>
    <li>
      <span>Rank: </span>
      <span>{rank}</span>
    </li>
    <li>
      <span>gross: </span>
      <p>{gross}</p>
    </li>
    <li>
      <span>weekend: </span>
      <p>{weekend}</p>
    </li>
    <li>
      <span>weeks: </span>
      <p>{weeks}</p>
    </li>
  </ul>;
  if (!box) {
    InfoDrawerContent = <ul>
      <li>
        <span>Rank: </span>
        <span>{rank}</span>
      </li>
      <li>
        <span>Crew: </span>
        <p>{crew}</p>
      </li>
    </ul>
  }
  return (
    <div
      onMouseOver={() => openDrawer(setDrawerVisibility)}
      onMouseOut={() => closeDrawer(setDrawerVisibility)}
    >
      <Container>
        <button favorite={isFavorite} className="favorite" onClick={() => addFavorite()}>add to favorites</button>
        <div onClick={onClick} className="imgLayer">
          <img src={img} />
        </div>
        <Info rate={rateColor(rating)}>
          <h3>{name}</h3>
          <span>{rating}</span>
        </Info>
        <InfoDrawer visibility={drawerVisibility}>
          {InfoDrawerContent}
        </InfoDrawer>
      </Container>
    </div >
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
const rateColor = (rate) => {
  if (rate >= 7) {
    return "green"
  }
  else if (3 < rate < 7) {
    return "yellow"
  }
  return "red"
}

export default Movie;
