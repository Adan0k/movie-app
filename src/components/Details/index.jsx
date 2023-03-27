import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { movieContext } from "../../App";

const Background = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 200;
    background-color: rgb(0,0,0,0.63);
    display: ${(props) => props.current === "" ? "none" : "block"}
`
const Modal = styled.div`
    height: 50%;
    width: 50%;
    background-color: white;
    position: absolute;
    top: 25%;
    left: 25%;
    box-sizing: border-box;
    padding: 5%;

    & img {
        position: absolute;
        top: 10%;
        right: 5%;
        height: 80%;
        width: 30%;
    }

    & p {
        margin-top: 10px;
        width: 50%;
    }

    & ul {
        margin-top: 10px;
        width: 40%;
        list-style: none;
    }
    & li{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 10px;
    }
`

const Details = () => {
    const { current, setCurrent } = useContext(movieContext);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovieDetails(current, setMovie)
    }, [current]);

    return (
        <Background current={current} onClick={() => setCurrent("")}>
            <Modal>
                <img src={movie.image} />
                <h3>{movie.title}</h3>
                <p>{movie.plot}</p>
                <ul>
                    <li>
                        <span>starring:</span>
                        <span>{movie.stars}</span>
                    </li>
                    <li>
                        <span>genres:</span>
                        <span>{movie.genres}</span>
                    </li>
                </ul>
            </Modal>
        </Background >
    );
}

const getMovieDetails = (movie, set) => {
    fetch(`https://imdb-api.com/pt-BR/API/Title/k_zg2hsr14/${movie}`)
        .then((response) => response.json())
        .then(data => set(data))
        .catch((err) => console.log(err));
}

export default Details;