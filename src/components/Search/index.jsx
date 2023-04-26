import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    border-radius: 6px;
    border-style: none;
    height: 2vh;
    background-color: #22254b;
    outline-style: none;
    padding: 10px;
    color: white;
 `

const Search = ({ set }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          set(value);
        }}
      >
        <Input
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="search"
        />
      </form>
    </>
  );
};

export default Search;
