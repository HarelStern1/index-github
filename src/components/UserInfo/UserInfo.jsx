import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { getRepos } from "./../../api";
import {
  BackLink,
  InfoContainer,
  MainInfo,
  MainLeft,
  MainRight,
  SecondaryInfo,
  UserBtn,
  PublicRepos,
  Repo,
} from "./UserInfo.styles";

function UserInfo({ currentUser }) {
  const [repos, setRepos] = useState([]);

  const {
    repos_url,
    avatar_url,
    name,
    location,
    bio,
    login,
    html_url,
    public_gists,
    public_repos,
    followers,
    following,
  } = currentUser;

  useEffect(() => {
    getRepos(repos_url).then((res) => setRepos(res.data));
  }, []);

  return (
    <div>
      <Link to="/">
        <BackLink>Back To Search</BackLink>
      </Link>

      <InfoContainer>
        <MainInfo>
          <MainLeft>
            <img className="user-img" src={avatar_url} alt="" />
            <h1 className="user-name-main">{name}</h1>
            <h3 className="user-location">Location: {location}</h3>
          </MainLeft>
          <MainRight>
            <h2 className="about-title">About:</h2>
            <h4 className="user-about">{bio}</h4>
            <h4>
              <strong>Username: </strong>
              {login}
            </h4>
            <div className="a-container">
              <a href={html_url} target="_blank">
                <button className="github-link">Visit GitHub Profile</button>
              </a>
            </div>
          </MainRight>
        </MainInfo>
        <SecondaryInfo>
          <UserBtn>Public Gists: {public_gists}</UserBtn>
          <UserBtn className="user-button light-blue">
            Public Repos: {public_repos}
          </UserBtn>
          <UserBtn className="user-button light-green">
            Followers: {followers}
          </UserBtn>
          <UserBtn className="user-button dark-color">
            Following: {following}
          </UserBtn>
        </SecondaryInfo>
        <PublicRepos>
          <h1 style={{ textAlign: "center" }}>Last Public Repos</h1>
          {repos.map((repo, idx) => {
            const { name, description, updated_at } = repo;
            return (
              <Repo key={idx}>
                <a href={html_url} target="_blank">
                  <button className="repo-link">{name}</button>
                </a>
                <h4 className="repo-description">{description}</h4>
                <h5 className="updated">
                  Last updated at: {updated_at.slice(0, 10)}
                </h5>
              </Repo>
            );
          })}
        </PublicRepos>
      </InfoContainer>
    </div>
  );
}

export default UserInfo;
