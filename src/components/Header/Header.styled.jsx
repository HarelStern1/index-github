import styled from "styled-components";

export const ToolbarWrraper = styled.div`
  background-color: #282828;
`;

export const Logo = styled.div`
  flex-grow: 1;
`;

export const LinksWrraper = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 25px;
`;

export const Img = styled.img`
  float: left;
  margin-right: 10px;
  margin-top: -3px;
`;

export const LinkBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  &:hover {
    color: rgb(216, 221, 226);
  }
`;
