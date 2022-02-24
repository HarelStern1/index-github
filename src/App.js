import { React, useState } from "react";
import Container from "./Container";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserInfo from "./components/UserInfo/UserInfo";
import About from "./components/About/About";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/userinfo"
            element={<UserInfo currentUser={currentUser} />}
          />
          <Route
            exact
            path="/"
            element={<Container setCurrentUser={setCurrentUser} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
