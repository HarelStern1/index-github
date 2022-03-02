import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboutHeading = styled.h1`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const AboutContent = styled.div`
  color: white;
  margin-top: 10px;
  font-size: 20px;
`;

export const AboutLink = styled.button`
  background-color: transparent;
  border: none;
  color: rgb(116, 171, 223);
  font-size: 19px;
  cursor: pointer;

  &:hover {
    color: rgb(93, 139, 182);
  }
`;
