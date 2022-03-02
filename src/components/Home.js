import React, { useState, useMemo } from "react";
import SearchArea from "./SearchArea/SearchArea";
import List from "./List/List";

function Home({ setCurrentUser }) {
  const [users, setUsers] = useState([]);

  return (
    <>
      <SearchArea users={users} setUsers={setUsers} />
      <List users={users} setCurrentUser={setCurrentUser} />
    </>
  );
}

export default Home;
