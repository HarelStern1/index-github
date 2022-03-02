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

  &:hober {
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
