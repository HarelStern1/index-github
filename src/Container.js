import React, { useState } from "react";
import Header from "./components/Header/Header";
import SearchArea from "./components/SearchArea/SearchArea";
import List from "./components/List/List";

function Container({ setCurrentUser }) {
  const [users, setUsers] = useState([]);
  return (
    <>
      <Header />
      <SearchArea users={users} setUsers={setUsers} />
      <List users={users} setCurrentUser={setCurrentUser} />
    </>
  );
}

export default Container;
