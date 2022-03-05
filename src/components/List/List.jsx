import React, { useContext } from "react";
import Card from "../Card/Card";
import { ListContainer } from "./List.styled";
import { UserContext } from "../../contexts/UserContext";

function List() {
  const {
    usersObj: { data: users },
  } = useContext(UserContext);
  return (
    <ListContainer>
      {users.map((user, idx) => (
        <Card key={idx} user={user} />
      ))}
    </ListContainer>
  );
}

export default List;
