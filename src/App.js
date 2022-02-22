import { React, useState } from "react";
import Container from "./Container";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserInfo from "./components/UserInfo/UserInfo";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/userinfo"
            element={<UserInfo currentUser={currentUser} />}
          />
          <Route
            path="/"
            element={<Container setCurrentUser={setCurrentUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
