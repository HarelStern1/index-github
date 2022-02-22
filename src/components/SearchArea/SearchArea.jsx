import React, { useState, useRef } from "react";
import "./styles.css";
import { addUserToList } from "../../api";
import spinner from "./../../images/spinner.gif";

function SearchArea({ setUsers, users }) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  return (
    <div className="search-area-container">
      <input
        ref={inputRef}
        className="input"
        placeholder="Search Users..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
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
        Search
      </button>
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
