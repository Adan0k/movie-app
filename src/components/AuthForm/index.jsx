import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../Header";

const Form = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1px;
    border: 1px solid black;
    width: 40rem;
    height: 20rem;

    & input {
        border: white;
        color: black;
        padding: 2px;
        box-sizing: border-box;
        outline: none;

    }
    & label {
        display: flex;
        flex-direction: column;
        height: 20rem;
    }
    & button {
        
    }
`

const AuthForm = ({ authenticate }) => {
    const email = useRef();
    const password = useRef();

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <label>
                Email:
                <input ref={email} />
            </label>

            <label>
                Password:
                <input ref={password} />
            </label>

            <button onClick={() => authenticate(email.current.value, password.current.value)}>Submit</button>
        </Form>
    );
}

export default AuthForm;