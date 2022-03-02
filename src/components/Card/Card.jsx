import React from "react";
import { Link } from "react-router-dom";
import { UserCard, UserImg, UserName, UserLink } from "./Card.styled";

function Card({ user, setCurrentUser }) {
  const {
    data,
    data: { avatar_url },
    data: { login },
  } = user;
  return (
    <UserCard>
      <UserImg src={avatar_url} alt="" />
      <UserName>{login}</UserName>
      <Link to="userinfo" onClick={() => setCurrentUser(data)}>
        <UserLink>More Details</UserLink>
      </Link>
    </UserCard>
  );
}

export default Card;
