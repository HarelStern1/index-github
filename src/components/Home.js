import React from "react";
import SearchArea from "./SearchArea/SearchArea";
import List from "./List/List";
import Greeting from "./Greenting/Greeting";

function Home() {
  return (
    <>
      <Greeting />
      <SearchArea />
      <List />
    </>
  );
}

export default Home;
