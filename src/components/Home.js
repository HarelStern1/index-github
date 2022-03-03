import React, { useState, useMemo } from "react";
import SearchArea from "./SearchArea/SearchArea";
import List from "./List/List";
import Greeting from "./Greenting/Greeting";

function Home({ setCurrentUser }) {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Greeting />
      <SearchArea users={users} setUsers={setUsers} />
      <List users={users} setCurrentUser={setCurrentUser} />
    </>
  );
}

export default Home;
