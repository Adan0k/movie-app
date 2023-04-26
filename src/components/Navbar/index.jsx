import React, { useContext } from "react"
import { movieContext } from "../../App";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Nav = styled.nav`
    width: 40%;
    & ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
    }
    & li {
        color: white;
    }
    & a{
        background: none;
        border: none;
        padding: 10px;
        color: white;
        font-size: 34px;
        transition: border 0.5s;
        text-decoration: none;

        &: hover{
            cursor: pointer;
            border-bottom: 1px solid white;
        }
    }
`

const Navbar = () => {
    const { user } = useContext(movieContext);
    const home = user === null ? <li><a>home</a></li> : <li><Link to="/">home</Link></li>

    return (
        <>
            <Nav>
                <ul>
                    {home}
                    <li><Link to="favorites">favorites</Link></li>
                    <li><Link to="SignIn">Sign in</Link></li>
                    <li><Link to="SignUp">Sign up</Link></li>
                    <li>{user?.email}</li>
                </ul>
            </Nav>
        </>
    );
}

export default Navbar;