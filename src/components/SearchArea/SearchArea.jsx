import React, { useState, useRef } from "react";
import { addUserToList } from "../../api";
import spinner from "./../../images/spinner.gif";
import searchIcon from "./../../images/searchIcon.png";
import {
  SearchContainer,
  Loading,
  Input,
  SubmitBtn,
  SearchForm,
} from "./SearchArea.styled";

function SearchArea({ setUsers, users }) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  return (
    <SearchContainer>
      <SearchForm>
        <Input
          ref={inputRef}
          placeholder="Search Users..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <SubmitBtn
          type="submit"
          onClick={() =>
            addUserToList(value, setUsers, setValue, setIsLoading, inputRef)
          }
        >
          <img src={searchIcon} alt="" />
        </SubmitBtn>
      </SearchForm>
      {isLoading ? (
        <Loading>
          <img src={spinner} alt="" />
        </Loading>
      ) : (
        <Loading></Loading>
      )}
    </SearchContainer>
  );
}

export default SearchArea;
