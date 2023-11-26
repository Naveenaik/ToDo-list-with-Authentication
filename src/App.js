import "./App.css";

import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Home"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home user={user} setLoginUser={setLoginUser} />
              ) : (
                <SignIn setLoginUser={setLoginUser} />
              )
            }
          ></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route
            path="/login"
            element={<SignIn setLoginUser={setLoginUser} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
