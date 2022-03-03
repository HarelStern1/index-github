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

  // inputRef.eventListener("keypress", (e) => {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //     addUserToList(value, setUsers, setValue, setIsLoading, inputRef);
  //   }
  // });

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     console.log("enter press here! ");
  //   }
  // };

  return (
    <SearchContainer>
      <SearchForm>
        <Input
          ref={inputRef}
          placeholder="Search Users..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) =>
            e.key === "Enter" &&
            addUserToList(value, setUsers, setValue, setIsLoading, inputRef)
          }
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
