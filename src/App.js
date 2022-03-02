import { React, useState } from "react";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserInfo from "./components/UserInfo/UserInfo";
import About from "./components/About/About";
import Header from "./components/Header/Header";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/userinfo"
            element={<UserInfo currentUser={currentUser} />}
          />
          <Route
            exact
            path="/"
            element={<Home setCurrentUser={setCurrentUser} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
