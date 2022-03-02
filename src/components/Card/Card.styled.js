import styled from "styled-components";

export const UserCard = styled.div`
  border: none;
  border-radius: 8px;
  height: 200px;
  width: 350px;
  margin-left: 80px;
  margin-top: 20px;
  background-color: #bdbec0;
`;

export const UserImg = styled.img`
  margin-top: 15px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const UserName = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const UserLink = styled.button`
  height: 40px;
  width: 130px;
  border: none;
  border-radius: 6px;
  color: white;
  background-image: linear-gradient(to bottom right, #444444, #727171);
  cursor: pointer;
  font-size: 15px;
`;
