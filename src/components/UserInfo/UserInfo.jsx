import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../Header/Header";
import "./styles.css";
import { getRepos } from "./../../api";

function UserInfo({ currentUser }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos(currentUser.repos_url).then((res) => setRepos(res.data));
  }, []);

  return (
    <div>
      <Header />
      <Link to="/">
        <button className="link-back">Back To Search</button>
      </Link>

      <div className="info-container">
        <div className="main-info">
          <div className="main-left">
            <img className="user-img" src={currentUser?.avatar_url} alt="" />
            <h1 className="user-name-main">{currentUser?.name}</h1>
            <h3 className="user-location">Location: {currentUser?.location}</h3>
          </div>
          <div className="main-right">
            <h2 className="about-title">About:</h2>
            <h4 className="user-about">{currentUser?.bio}</h4>
            <h4>
              <strong>Username: </strong>
              {currentUser.login}
            </h4>
            <div className="a-container">
              <a href={currentUser?.html_url}>
                <button className="github-link">Visit GitHub Profile</button>
              </a>
            </div>
          </div>
        </div>
        <div className="secondary-info">
          <button className="user-button light-color">
            Public Gists: {currentUser.public_gists}
          </button>
          <button className="user-button light-blue">
            Public Repos: {currentUser.public_repos}
          </button>
          <button className="user-button light-green">
            Followers: {currentUser.followers}
          </button>
          <button className="user-button dark-color">
            Following: {currentUser.following}
          </button>
        </div>
        <div className="last-5-repos-container">
          <h1 style={{ textAlign: "center" }}>Last Public Repos</h1>
          {repos.map((repo, idx) => (
            <div className="repo" key={idx}>
              <a href={repo.html_url}>
                <button className="repo-link">{repo.name}</button>
              </a>
              <h4 className="repo-description">{repo?.description}</h4>
              <h5 className="updated">
                Last updated at: {repo?.updated_at.slice(0, 10)}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
