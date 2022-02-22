import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Card({ user, setCurrentUser }) {
  console.log(user);
  return (
    <div className="user-card">
      <img src={user?.data?.avatar_url} alt="" className="user-img-round" />
      <h2 className="user-name">{user?.data?.login}</h2>
      <Link to="userinfo" onClick={() => setCurrentUser(user.data)}>
        <button className="link">More Deatils</button>
      </Link>
    </div>
  );
}

export default Card;
