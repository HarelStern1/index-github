import React from "react";
import Card from "../Card/Card";
import "./styles.css";

function List({ users, setCurrentUser }) {
  return (
    <div className="users-container">
      {users.map((user, idx) => (
        <Card key={idx} user={user} setCurrentUser={setCurrentUser} />
      ))}
    </div>
  );
}

export default List;
