import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 35px;
  text-align: center;
  width: 100%;
  padding: 5%;
  height: 200px;
`;

export const Loading = styled.div`
  margin-top: 15px;
  height: 30px;
`;

export const Input = styled.input`
  background-color: transparent;
  flex: 1;
  border: 0;
  outline: none;
  padding: 24px 20px;
  font-size: 20px;
  color: black;

  &::placeholder {
    color: black;
  }
`;

export const SubmitBtn = styled.button`
  border: 0;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: #9a9da1;
  cursor: pointer;

  &:hover {
    background-color: #919396;
  }
`;

export const SearchForm = styled.div`
  width: 100%;
  max-width: 650px;
  background-color: #b0b3b8;
  display: flex;
  align-items: center;
  border-radius: 60px;
  padding: 3px 20px;
  margin: 0 auto;
  margin-top: -50px;
`;

export const SearchFormWrraper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const ClearBtn = styled.button`
  border: 0;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: transparent;
`;
