import styled from "styled-components";

export const BackLink = styled.button`
  height: 40px;
  width: 130px;
  border: none;
  border-radius: 6px;
  color: white;
  background-image: linear-gradient(to bottom right, #444444, #727171);
  cursor: pointer;
  margin-top: 30px;
  margin-left: 174px;
  font-size: 14px;

  &:hover {
    background-image: linear-gradient(to bottom right, #3a3939, #555252);
  }
`;

export const InfoContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 1000px;
  height: 600px;
  color: white;
`;

export const MainInfo = styled.div`
  margin-top: 20px;
  border: solid;
  border-width: 0.1px;
  border-color: rgb(173, 173, 168);
  border-radius: 6px;
  height: fit-content;
  display: flex;
`;

export const MainRight = styled.div`
  text-align: center;
  margin-left: 200px;
`;

export const MainLeft = styled.div`
  text-align: center;
  width: 260px;
`;

export const SecondaryInfo = styled.div`
  margin-top: 20px;
  border: solid;
  border-width: 0.1px;
  border-color: rgb(173, 173, 168);
  border-radius: 6px;
  height: 100px;
  text-align: center;
`;

export const UserBtn = styled.button`
  height: 30px;
  width: fit-content;
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 30px;
  font-weight: bold;
`;

export const PublicRepos = styled.div`
  height: fit-content;
  margin-top: 20px;
  border: solid;
  border-width: 0.1px;
  border-color: rgb(173, 173, 168);
  border-radius: 6px;
`;

export const Repo = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  border: solid;
  border-width: 0.1px;
  border-color: rgb(173, 173, 168);
  border-radius: 6px;
  width: 900px;
  height: fit-content;
  text-align: center;
`;

export const UserImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 80px;
`;

export const UserNameMain = styled.h1`
  margin-left: 82px;
`;

export const UserLocation = styled.h3`
  margin-left: 92px;
`;

export const AboutTitle = styled.h2`
  margin-top: 50px;
  text-align: center;
`;

export const LinkWrraper = styled.div`
  margin-top: 50px;
`;

export const GithubLink = styled.button`
  width: fit-content;
  height: 45px;
  border: none;
  background-image: linear-gradient(
    to bottom right,
    rgb(17, 87, 42),
    rgb(43, 231, 115)
  );
  color: white;
  padding: 1em 1.5em;
  border-radius: 8px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;

  &:hover {
    background-image: linear-gradient(
      to bottom right,
      rgb(31, 75, 46),
      rgb(39, 185, 95)
    );
  }
`;

export const LastPublicRepos = styled.h1`
  text-align: center;
`;

export const RepoLink = styled.button`
  margin-top: 5px;
  padding: 10px 20px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: rgb(6, 125, 180);
  &:hover {
    color: rgb(0, 168, 247);
  }
`;

export const RepoDecription = styled.h4`
  margin-top: -6px;
`;

export const Updated = styled.h5`
  margin-top: -6px;
`;
