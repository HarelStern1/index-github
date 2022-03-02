import React from "react";
import Card from "../Card/Card";
import { ListContainer } from "./List.styled";

function List({ users, setCurrentUser }) {
  return (
    <ListContainer>
      {users.map((user, idx) => (
        <Card key={idx} user={user} setCurrentUser={setCurrentUser} />
      ))}
    </ListContainer>
  );
}

export default List;
