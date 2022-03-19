import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import useUser from "./components/useUser";


function App() {
  const [user, setUser] = useUser();

  return (
    <div style={{display: "flex"}}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
          margin: "1rem"
        }}
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          {
            user && 
            <li>
            <Link to="/tweets/new">Post Tweet</Link>
            </li>
          }
          {
            user ?
            <li>
              <Link to="logout">Logout</Link>
            </li> :
            <li>
              <Link to="login">Login</Link>
            </li>
          }
        </ul>
      </nav>
      <Outlet context={[user, setUser]} />
    </div>
  );
}

export default App;
