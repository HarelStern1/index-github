import React, { useState, useRef } from "react";
import "./styles.css";
import { addUserToList } from "../../api";
import spinner from "./../../images/spinner.gif";
import searchIcon from "./../../images/searchIcon.png";

function SearchArea({ setUsers, users }) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  return (
    <div className="search-area-container">
      <div action="" className="search-bar-form">
        <input
          ref={inputRef}
          className="input"
          placeholder="Search Users..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="submit-btn"
          onClick={() =>
            addUserToList(
              value,
              setUsers,
              setValue,
              setIsLoading,
              users,
              inputRef
            )
          }
        >
          <img src={searchIcon} alt="" />
        </button>
      </div>
      {isLoading ? (
        <div className="loading">
          <img src={spinner} alt="" />
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
}

export default SearchArea;
