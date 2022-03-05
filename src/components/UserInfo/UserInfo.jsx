import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getRepos } from "./../../api";
import { UserContext } from "./../../contexts/UserContext";
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
  UserImg,
  UserNameMain,
  UserLocation,
  AboutTitle,
  LinkWrraper,
  GithubLink,
  LastPublicRepos,
  RepoLink,
  RepoDecription,
  Updated,
} from "./UserInfo.styles";

function UserInfo() {
  const [repos, setRepos] = useState([]);
  const {
    currentUserObj: { data: currentUser },
  } = useContext(UserContext);
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

  const userButtons = [
    {
      text: "Public Gists",
      value: public_gists,
    },
    {
      text: "Public Repos",
      value: public_repos,
    },
    {
      text: "Followers",
      value: followers,
    },
    {
      text: "Following",
      value: following,
    },
  ];

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
            <UserImg src={avatar_url} />
            <UserNameMain>{name}</UserNameMain>
            <UserLocation>Location: {location}</UserLocation>
          </MainLeft>
          <MainRight>
            <AboutTitle>About:</AboutTitle>
            <h4>{bio}</h4>
            <h4>
              <strong>Username: </strong>
              {login}
            </h4>
            <LinkWrraper>
              <a href={html_url} target="_blank">
                <GithubLink>Visit GitHub Profile</GithubLink>
              </a>
            </LinkWrraper>
          </MainRight>
        </MainInfo>
        <SecondaryInfo>
          {userButtons.map((btn) => (
            <UserBtn>
              {btn.text}:{btn.value}
            </UserBtn>
          ))}
        </SecondaryInfo>
        <PublicRepos>
          <LastPublicRepos>Last Public Repos</LastPublicRepos>
          {repos.map((repo, idx) => {
            const { name, description, updated_at } = repo;
            return (
              <Repo key={idx}>
                <a href={html_url} target="_blank">
                  <RepoLink>{name}</RepoLink>
                </a>
                <RepoDecription>{description}</RepoDecription>
                <Updated>Last updated at: {updated_at.slice(0, 10)}</Updated>
              </Repo>
            );
          })}
        </PublicRepos>
      </InfoContainer>
    </div>
  );
}

export default UserInfo;
