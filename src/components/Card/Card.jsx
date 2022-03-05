import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserCard, UserImg, UserName, UserLink } from "./Card.styled";
import { UserContext } from "../../contexts/UserContext";

function Card({ user }) {
  const { avatar_url, login } = user;
  const {
    currentUserObj: { change: changeCurrentUser },
  } = useContext(UserContext);

  const handleClick = () => changeCurrentUser(user);
  return (
    <UserCard>
      <UserImg src={avatar_url} alt="" />
      <UserName>{login}</UserName>
      <Link to="userinfo" onClick={handleClick}>
        <UserLink>More Details</UserLink>
      </Link>
    </UserCard>
  );
}

export default Card;
