import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = styled.input`
  font-size: 0.8rem;
  font-family: var(--theme-font);
  padding: 5px 10px;
  // border: 1px solid #00000044;
  // border-radius: 100px;
  border: none;
  max-width: 200px;
`;

const Search = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.8rem",
        borderBottom: "1px solid #333",
        marginRight: "2rem",
      }}
    >
      <FontAwesomeIcon icon={faSearch} />
      <SearchInput placeholder="Looking for..." type="text" />
    </div>
  );
};

export default Search;
