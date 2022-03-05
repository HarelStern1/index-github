import React, { useState, useRef, useContext } from "react";
import { getUser } from "../../api";
import spinner from "./../../images/spinner.gif";
import searchIcon from "./../../images/searchIcon.png";
import trashIcon from "./../../images/trash.png";
import { UserContext } from "../../contexts/UserContext";
import {
  SearchContainer,
  Loading,
  Input,
  SubmitBtn,
  SearchForm,
  SearchFormWrraper,
  ClearBtn,
} from "./SearchArea.styled";

function SearchArea() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const {
    usersObj: { data: users, change: changeUsers },
  } = useContext(UserContext);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const { data: userData } = await getUser(value);
      changeUsers([...users, userData]);
      setValue("");
      inputRef.current.focus();
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setValue("");
      inputRef.current.focus();
      setIsLoading(false);
    }
  };

  const clearList = () => {
    changeUsers([]);
  };

  return (
    <SearchContainer>
      <SearchFormWrraper>
        <SearchForm>
          <Input
            ref={inputRef}
            placeholder="Search Users..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
          />
          <SubmitBtn type="submit" onClick={handleSubmit}>
            <img src={searchIcon} alt="" />
          </SubmitBtn>
          <ClearBtn>
            <img src={trashIcon} alt="" onClick={clearList} />
          </ClearBtn>
        </SearchForm>
      </SearchFormWrraper>
      {isLoading && (
        <Loading>
          <img src={spinner} alt="" />
        </Loading>
      )}
    </SearchContainer>
  );
}

export default SearchArea;
