import React, { useState } from "react";

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
        <input
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="search"
        />
      </form>
    </>
  );
};

export default Search;
