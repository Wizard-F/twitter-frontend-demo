import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import useUser from "./components/useUser";


function App() {
  const [user, setUser] = useUser();

  return (
    <div style={{display: "flex"}}>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link> 
          </li>
          <li>
            <Link className="nav-link text-white" to="about">About</Link> 
          </li>
          {
            user && 
            <li>
              <Link className="nav-link text-white" to="/tweets/new">Post Tweet</Link>
            </li>
          }
          {
            user ?
            <li>
              <Link className="nav-link text-white" to="logout">Logout</Link>
            </li> :
            <li>
              <Link className="nav-link text-white" to="login">Login</Link>
            </li>
          }
        </ul>
      </div>
      <div className="container">
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  );
}

export default App;
