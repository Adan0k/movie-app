import React, { useContext } from "react";
import styled from "styled-components";
import { movieContext } from "../../App";

const StyledBtn = styled.button`
  background: #22254b;
  border-radius: 50px;
  border: 1px solid #fff;
  color: #fff;
  padding: 0 16px;
  font-size: 16px;
  cursor: pointer;
`;

const ComingBtn = () => {
  const { setDisplayed, displayed } = useContext(movieContext);
  return (
    <StyledBtn onClick={() => (displayed === "top" ? setDisplayed("box") : setDisplayed("top"))}>
      Coming soon...
    </StyledBtn>
  );
};

export default ComingBtn;
