import { React, useState } from "react";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserInfo from "./components/UserInfo/UserInfo";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import { UserProvidor } from "./../src/contexts/UserContext";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const providorObj = {
    usersObj: {
      data: users,
      change: (value) => setUsers(value),
    },
    currentUserObj: {
      data: currentUser,
      change: (value) => setCurrentUser(value),
    },
  };

  return (
    <UserProvidor value={providorObj}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/userinfo" element={<UserInfo />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </UserProvidor>
  );
}

export default App;
